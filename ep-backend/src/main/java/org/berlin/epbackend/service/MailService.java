package org.berlin.epbackend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.berlin.epbackend.dto.MailDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;


@Service
@RequiredArgsConstructor
@Slf4j
public class MailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String mailTo;

    public void sendEmail(MailDTO mailDTO) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(new InternetAddress(mailDTO.getFrom(), mailDTO.getName()));
            helper.setTo(mailTo);

            helper.setSubject("[Kontaktanfrage] " + mailDTO.getSubject());
            String htmlBody = generateHtmlBody(mailDTO);
            helper.setText(htmlBody, true);

            mailSender.send(message);
        } catch (MessagingException | UnsupportedEncodingException e) {
            log.error("Failed to send email from '{}': {}", mailDTO.getFrom(), e.getMessage());
        }
    }

    String generateHtmlBody(MailDTO mailDTO) {
        String template = "<html><body>" +
                "<h1>%s</h1>" +
                "<p>From: %s &lt;%s&gt;</p>" +
                "<p>%s</p>" +
                "</body></html>";

        return String.format(template, mailDTO.getSubject(), mailDTO.getName(), mailDTO.getFrom(), mailDTO.getText());
    }
}
