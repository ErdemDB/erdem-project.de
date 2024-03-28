package org.berlin.epbackend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.experimental.SuperBuilder;

import java.time.Instant;

@NoArgsConstructor
@Data
@SuperBuilder
public class TaskDTO {
    private String id;
    private String title;
    @NonNull
    private String text;
    @NonNull
    private Instant begin;
    private Instant end;
}
