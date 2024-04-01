package org.berlin.epbackend.exception;

public class WeatherDataParseException extends RuntimeException {

    public WeatherDataParseException(String message, Throwable cause) {
        super(message, cause);
    }
}