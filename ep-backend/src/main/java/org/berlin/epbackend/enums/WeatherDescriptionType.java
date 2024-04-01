package org.berlin.epbackend.enums;

public enum WeatherDescriptionType {
    CLEAR("Clear"),
    CLOUDS("Clouds"),
    SNOW("Snow"),
    RAIN("Rain"),
    DRIZZLE("Drizzle"),
    THUNDERSTORM("Thunderstorm");

    private final String type;

    WeatherDescriptionType(final String type) {
        this.type = type;
    }

    public String getWeatherDescriptionType() {
        return this.type;
    }

    public static WeatherDescriptionType fromString(String text) {
        if (text != null) {
            for (WeatherDescriptionType b : WeatherDescriptionType.values()) {
                if (text.equalsIgnoreCase(b.type)) {
                    return b;
                }
            }
        }
        throw new IllegalArgumentException("No constant with text " + text + " found");
    }
}