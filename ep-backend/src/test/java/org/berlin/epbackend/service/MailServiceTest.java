package org.berlin.epbackend.service;

import jakarta.mail.Session;
import jakarta.mail.internet.MimeMessage;
import org.apache.commons.lang3.reflect.FieldUtils;
import org.berlin.epbackend.dto.MailDTO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.javamail.JavaMailSender;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class MailServiceTest {

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private MailService mailService;

    @Test
    void sendEmailTest() throws Exception {
        // Prepare test data
        MailDTO mailDTO = MailDTO.builder()
                .from("kaptn.blaubaer@ahoi.com")
                .name("Kaptn Blaubaer")
                .subject("Neues Schiff")
                .text("Anfrage neues Schiff")
                .build();

        FieldUtils.writeField(mailService, "mailTo", "kaptn.blaubaer@ahoi.com", true);

        MimeMessage mimeMessage = new MimeMessage(Session.getDefaultInstance(System.getProperties()));
        doReturn(mimeMessage).when(mailSender).createMimeMessage();

        // Call method
        mailService.sendEmail(mailDTO);

        // Verify
        verify(mailSender).createMimeMessage();
        verify(mailSender).send(mimeMessage);

        assertTrue(mimeMessage.getFrom()[0].toString().contains( mailDTO.getFrom()));
        assertTrue(mimeMessage.getFrom()[0].toString().contains( mailDTO.getName()));
        assertTrue(mimeMessage.getSubject().contains(mailDTO.getSubject()));
    }
}