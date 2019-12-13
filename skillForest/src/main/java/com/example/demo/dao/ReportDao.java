package com.example.demo.dao;

import com.example.demo.entity.Report;

import java.util.List;

public interface ReportDao {

    int newReport(Report report);

    int updateReport(String reportId, int newStatus);

    List<Report> getNewReport();

    List<Report> getAllReport();

    Report getReport(String reportId);
}
