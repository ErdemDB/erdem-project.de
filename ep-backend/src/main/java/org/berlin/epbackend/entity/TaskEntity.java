package org.berlin.epbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.Instant;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@SuperBuilder
@Table(name = "task")
public class TaskEntity extends BaseEntity {
    @Column(nullable = false)
    private String title;
    private String text;
    @Column(nullable = false)
    private Instant begin;
    private Instant end;
}