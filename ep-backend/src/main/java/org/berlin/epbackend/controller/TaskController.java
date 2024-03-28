package org.berlin.epbackend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.berlin.epbackend.dto.TaskDTO;
import org.berlin.epbackend.entity.TaskEntity;
import org.berlin.epbackend.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@Slf4j
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @Operation(summary = "Gets all tasks", description = "Retrieves a list of all tasks available.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved list of tasks"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping("/list")
    public ResponseEntity<List<TaskEntity>> getTasks() {
        return ResponseEntity.ok(taskService.getTasks());
    }

    @Operation(summary = "Creates a new task", description = "Creates a new task with the given task details.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Task successfully created"),
            @ApiResponse(responseCode = "400", description = "Bad Request - invalid details provided"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @PostMapping("/create")
    public ResponseEntity<TaskEntity> createTask(@RequestBody TaskDTO taskDTO) {
        log.info("Received task creation request: {}", taskDTO);
        try {
            TaskEntity createdTask = taskService.createTask(taskDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
        } catch (Exception e) {
            log.error("Error creating task: ", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @Operation(summary = "Updates an existing task", description = "Updates the task with the specified ID based on the provided task details.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Task successfully updated"),
            @ApiResponse(responseCode = "400", description = "Bad Request - invalid task details or ID provided"),
            @ApiResponse(responseCode = "404", description = "Task not found - the task with the specified ID does not exist"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @PutMapping("/update")
    public ResponseEntity<Void> updateTask(@RequestBody TaskDTO taskDTO) {
        if (taskDTO.getId() == null) {
            log.error("Update request for Task received without an ID.");
            return ResponseEntity.badRequest().build();
        }
        try {
            taskService.updateTask(taskDTO);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            log.error("Failed to update Task. Entity with ID {} not found.", taskDTO.getId(), e);
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Deletes a task", description = "Deletes the task with the specified ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Task successfully deleted"),
            @ApiResponse(responseCode = "404", description = "Task not found - the task with the specified ID does not exist"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String id) {
        try {
            taskService.deleteTask(id);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            log.error("Error deleting task with id {}: {}", id, e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
}