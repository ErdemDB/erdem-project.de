package org.berlin.epbackend.repository;

import org.berlin.epbackend.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface  TaskRepository extends JpaRepository<TaskEntity, UUID> {
}
