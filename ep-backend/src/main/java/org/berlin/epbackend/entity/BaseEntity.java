package org.berlin.epbackend.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.Instant;
import java.util.UUID;

@SuperBuilder
@MappedSuperclass
@NoArgsConstructor
@Data
public class BaseEntity {
    @Id
    @GeneratedValue
    private UUID id;
    @CreatedDate
    private Instant createdAt;
    @LastModifiedDate
    private Instant updatedAt;
}