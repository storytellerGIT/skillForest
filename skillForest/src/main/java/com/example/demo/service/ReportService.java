package com.example.demo.service;

import com.example.demo.entity.Report;

import java.util.List;

public interface ReportService {

    boolean newReport(Report report);

    boolean confirmReport(String reportId);

    boolean denyReport(String reportId);

    List<Report> getNewReport();

    List<Report> getAllReport();

    Report getReport(String reportId);
}
