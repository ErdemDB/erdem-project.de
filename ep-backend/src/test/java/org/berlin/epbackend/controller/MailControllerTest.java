package org.berlin.epbackend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.berlin.epbackend.dto.MailDTO;
import org.berlin.epbackend.service.MailService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = MailController.class)
class MailControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private MailService mailService;

    @Test
    void testSendMail() throws Exception {
        MailDTO mailDTO = MailDTO.builder()
                .from("kaptn.blaubaer@ahoi.com")
                .name("Kaptn Blaubaer")
                .subject("Neues Schiff")
                .text("Anfrage neues Schiff")
                .build();


        doNothing().when(mailService).sendEmail(mailDTO);

        mockMvc.perform(post("/mail/send")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(mailDTO)))
                .andExpect(status().isOk());

        verify(mailService).sendEmail(mailDTO);
    }
}
