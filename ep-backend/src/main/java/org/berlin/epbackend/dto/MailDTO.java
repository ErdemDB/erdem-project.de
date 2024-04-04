package org.berlin.epbackend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@NoArgsConstructor
@Data
@SuperBuilder
public class MailDTO {

    @NotNull
    private String from;
    @NotNull
    private String subject;
    @NotNull
    private String name;
    @NotNull
    private String text;
}