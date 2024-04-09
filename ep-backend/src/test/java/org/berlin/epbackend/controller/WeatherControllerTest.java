package org.berlin.epbackend.controller;

import org.berlin.epbackend.dto.WeatherDTO;
import org.berlin.epbackend.service.WeatherService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import reactor.core.publisher.Mono;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = WeatherController.class)
class WeatherControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WeatherService weatherService;

    private WeatherDTO mockWeatherDTO;

    @BeforeEach
    public void setUp() {
        mockWeatherDTO = new WeatherDTO();
        mockWeatherDTO.setTemperature((20));
        // Set additional fields of mockWeatherDTO as necessary
    }

    @Test
    void testGetWeather() throws Exception {
        double latitude = 52.49532794159519;
        double longitude = 13.395902698021127;

        when(weatherService.getWeather(latitude, longitude))
                .thenReturn(Mono.just(mockWeatherDTO));

        mockMvc.perform(get("/weather")
                        .param("latitude", String.valueOf(latitude))
                        .param("longitude", String.valueOf(longitude))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        verify(weatherService).getWeather(latitude, longitude);
    }
}
