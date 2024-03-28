package org.berlin.epbackend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.berlin.epbackend.dto.TaskDTO;
import org.berlin.epbackend.entity.TaskEntity;
import org.berlin.epbackend.service.TaskService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = TaskController.class)
class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;

    @Autowired
    private ObjectMapper objectMapper;

    private TaskDTO taskDTO;
    private TaskEntity taskEntity;


    @BeforeEach
    public void setUp() {
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
    void testGetTasks() throws Exception {
        List<TaskEntity> allTasks = List.of(taskEntity);

        when(taskService.getTasks()).thenReturn(allTasks);

        mockMvc.perform(get("/tasks/list")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].id", is(taskEntity.getId().toString())));
    }

    @Test
    void testCreateTask() throws Exception {
        given(taskService.createTask(taskDTO)).willReturn(taskEntity);

        mockMvc.perform(post("/tasks/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(taskDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id", is(taskEntity.getId().toString())));
    }

    @Test
    void testUpdateTask() throws Exception {
        mockMvc.perform(put("/tasks/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(taskDTO)))
                .andExpect(status().isOk());
    }

    @Test
    void testDeleteTask() throws Exception {
        String id = UUID.randomUUID().toString();

        mockMvc.perform(delete("/tasks/" + id)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}