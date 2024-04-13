package org.berlin.epbackend.service;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.berlin.epbackend.exception.DirectoryCreationException;
import org.berlin.epbackend.exception.FileNotFoundException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;


@Service
@RequiredArgsConstructor
@Slf4j
public class FileService {


    @Value("${pdf.storage.dir}")
    private String pdfDir;

    private Path pdfPath;

    @PostConstruct
    private void init() throws DirectoryCreationException {
        try {
            File directory = new File(pdfDir);
            if (!directory.exists()) {
                boolean directoryCreated = directory.mkdirs();
                if (!directoryCreated) {
                    throw new DirectoryCreationException("Directory could not be created: " + pdfDir);
                }
            }
            String pdfFilename = "resume.pdf";
            pdfPath = Paths.get(pdfDir, pdfFilename);
        } catch (DirectoryCreationException e) {
            throw new DirectoryCreationException("Failed to initialize resources: " + e.getMessage());
        }
    }

    public Resource loadPdfAsResource() throws FileNotFoundException, MalformedURLException {
        try {
            Resource resource = new UrlResource(pdfPath.toUri());
            log.info("Attempting to access PDF at path: {}", pdfPath);
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new FileNotFoundException("File not found " + pdfPath);
            }
        } catch (FileNotFoundException e) {
            throw new FileNotFoundException("Error accessing file: " + pdfDir, e);

        }
    }
}