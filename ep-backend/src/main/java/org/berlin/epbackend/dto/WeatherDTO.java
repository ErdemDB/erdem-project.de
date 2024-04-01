package org.berlin.epbackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.berlin.epbackend.enums.WeatherDescriptionType;

@NoArgsConstructor
@Data
@SuperBuilder
public class WeatherDTO {

    @NotNull
    private int temperature;
    @NotNull
    @Schema(enumAsRef=true)
    private WeatherDescriptionType description;
    @NotNull
    private String city;
}