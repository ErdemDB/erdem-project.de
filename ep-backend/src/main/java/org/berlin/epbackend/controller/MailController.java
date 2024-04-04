package org.berlin.epbackend.controller;

import jakarta.mail.MessagingException;
import lombok.extern.slf4j.Slf4j;
import org.berlin.epbackend.dto.MailDTO;
import org.berlin.epbackend.service.MailService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/mail")
@Slf4j
public class MailController {

    private final MailService mailService;

    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/send")
    public void sendMail(@RequestBody MailDTO mailDTO) throws MessagingException, UnsupportedEncodingException {
        mailService.sendEmail(mailDTO);
    }
}