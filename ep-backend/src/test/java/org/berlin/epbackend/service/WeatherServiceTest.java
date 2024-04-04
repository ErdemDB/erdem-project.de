package org.berlin.epbackend.service;

import org.berlin.epbackend.dto.WeatherDTO;
import org.berlin.epbackend.enums.WeatherDescriptionType;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class WeatherServiceTest {

    @SpyBean
    private WeatherService weatherService;

    @Test
    void testGetWeather() {
        double latitude = 52.49532794159519;
        double longitude = 13.395902698021127;

        WeatherDTO weatherDTO = weatherService.getWeather(latitude, longitude).block();

        assertThat(weatherDTO).isNotNull();
        assertThat(WeatherDescriptionType.values()).contains(weatherDTO.getDescription());
        assertThat(weatherDTO.getCity()).isEqualTo("Berlin");
        assertThat(weatherDTO.getTemperature()).isBetween(-50, 50);
    }
}