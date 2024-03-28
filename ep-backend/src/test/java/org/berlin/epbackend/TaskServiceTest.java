package org.berlin.epbackend;

import org.berlin.epbackend.dto.TaskDTO;
import org.berlin.epbackend.entity.TaskEntity;
import org.berlin.epbackend.mapper.TaskMapper;
import org.berlin.epbackend.repository.TaskRepository;
import org.berlin.epbackend.service.TaskService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    @Mock
    private TaskMapper taskMapper;

    @InjectMocks
    private TaskService taskService;

    private TaskDTO taskDTO;
    private TaskEntity taskEntity;

    @BeforeEach
    void setUp() {
        taskDTO = TaskDTO.builder()
                .id(String.valueOf(UUID.randomUUID()))
                .title("Beispiel Titel")
                .text("Beispiel Text")
                .begin(Instant.now())
                .build();


        taskEntity = TaskEntity.builder()
                .id(UUID.randomUUID())
                .title("Beispiel Titel")
                .begin(Instant.now())
                .build();
    }

    @Test
    void getTasksTest() {
        when(taskRepository.findAll()).thenReturn(Collections.singletonList(taskEntity));
        List<TaskEntity> tasks = taskService.getTasks();
        verify(taskRepository).findAll();
        assert tasks.size() == 1;
        assert tasks.get(0).getTitle().equals(taskDTO.getTitle());
    }

    @Test
    void createTaskTest() {
        when(taskMapper.dtoToEntity(any(TaskDTO.class))).thenReturn(taskEntity);
        when(taskRepository.save(any(TaskEntity.class))).thenReturn(taskEntity);
        TaskEntity createdTask = taskService.createTask(taskDTO);
        verify(taskRepository).save(taskEntity);
        assert createdTask.getTitle().equals(taskDTO.getTitle());
    }

    @Test
    void updateTaskTest() {
        when(taskRepository.findById(any(UUID.class))).thenReturn(Optional.of(taskEntity));
        when(taskRepository.save(any(TaskEntity.class))).thenReturn(taskEntity);
        taskService.updateTask(taskDTO);
        verify(taskRepository).save(taskEntity);
    }

    @Test
    void deleteTaskTest() {
        when(taskRepository.findById(any(UUID.class))).thenReturn(Optional.of(taskEntity));
        doNothing().when(taskRepository).delete(any(TaskEntity.class));
        taskService.deleteTask(taskDTO.getId());
        verify(taskRepository).delete(taskEntity);
    }
}