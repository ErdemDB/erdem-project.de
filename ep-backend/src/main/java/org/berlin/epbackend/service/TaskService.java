package org.berlin.epbackend.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.berlin.epbackend.dto.TaskDTO;
import org.berlin.epbackend.entity.TaskEntity;
import org.berlin.epbackend.mapper.TaskMapper;
import org.berlin.epbackend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class TaskService {

    private final TaskMapper mapper;
    private final TaskRepository taskRepository;

    public List<TaskEntity> getTasks() {
        return taskRepository.findAll();
    }

    public TaskEntity createTask(TaskDTO taskDTO) {
        TaskEntity entity = mapper.dtoToEntity(taskDTO);
        taskRepository.save(entity);
        log.info("Task created with ID: " + taskDTO.getId());
        return entity;
    }

    public void updateTask(TaskDTO taskDTO) {
        Optional<TaskEntity> taskEntityOptional = taskRepository.findById(UUID.fromString(taskDTO.getId()));
        if (taskEntityOptional.isPresent()) {
            TaskEntity taskEntity = taskEntityOptional.get();
            mapper.updateEntityFromDto(taskDTO, taskEntity);
            taskRepository.save(taskEntity);
            log.info("Task with Id: " + taskDTO.getId() + " updated.");
        } else {
            throw new EntityNotFoundException("Task with Id: " + taskDTO.getId() + " not found.");
        }
    }

    public void deleteTask(String id) {
        Optional<TaskEntity> taskEntityOptional = taskRepository.findById(UUID.fromString(id));
        if (taskEntityOptional.isPresent()) {
            TaskEntity taskEntity = taskEntityOptional.get();
            taskRepository.delete(taskEntity);
            log.info("Task with ID: " + id + " deleted.");
        } else {
            throw new EntityNotFoundException("Task with ID: " + id + " not found.");
        }
    }
}