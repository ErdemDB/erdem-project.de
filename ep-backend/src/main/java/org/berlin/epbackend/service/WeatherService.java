package org.berlin.epbackend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.berlin.epbackend.dto.WeatherDTO;
import org.berlin.epbackend.enums.WeatherDescriptionType;
import org.berlin.epbackend.exception.WeatherDataParseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
@Slf4j
public class WeatherService {

    @Value("${openweather.api.key}")
    private String apiKey;
    @Value("${openweather.base.url}")
    private String baseUrl;
    private final ObjectMapper objectMapper;
    private final WebClient.Builder webClientBuilder;

    public Mono<WeatherDTO> getWeather(double latitude, double longitude) {
        String url = buildUrl(latitude, longitude);

        return this.webClientBuilder.build().get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class)
                .map(this::parseResponseToDto);
    }

    private WeatherDTO parseResponseToDto(String responseBody) {
        try {
            JsonNode weatherNode = objectMapper.readTree(responseBody);
            WeatherDescriptionType description = WeatherDescriptionType.fromString(weatherNode.get("weather").get(0).get("main").textValue());
            String city = weatherNode.get("name").textValue();
            int temperature = (int) (weatherNode.get("main").get("temp").asDouble());

            return WeatherDTO.builder()
                    .description(description)
                    .temperature(temperature)
                    .city(city)
                    .build();
        } catch (JsonProcessingException e) {
            log.error("Error parsing weather data", e);
            throw new WeatherDataParseException("Failed to parse weather data", e);
        }
    }

    private String buildUrl(double latitude, double longitude) {
        return UriComponentsBuilder.fromHttpUrl(baseUrl)
                .queryParam("lat", latitude)
                .queryParam("lon", longitude)
                .queryParam("appid", apiKey)
                .queryParam("units", "metric")
                .queryParam("lang", "de")
                .toUriString();
    }
}