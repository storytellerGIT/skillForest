package com.example.demo.service.impl;

import com.example.demo.dao.ReportDao;
import com.example.demo.entity.Report;
import com.example.demo.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportDao reportDao;

    @Override
    public boolean newReport(Report report) {
        int flag = reportDao.newReport(report);
        if(flag == 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    @Override
    public boolean confirmReport(String reportId) {
        int flag = reportDao.updateReport(reportId, 1);
        if(flag == 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    @Override
    public boolean denyReport(String reportId) {
        int flag = reportDao.updateReport(reportId, 2);
        if(flag == 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    @Override
    public List<Report> getNewReport() {
        return reportDao.getNewReport();
    }

    @Override
    public List<Report> getAllReport() {
        return reportDao.getAllReport();
    }

    @Override
    public Report getReport(String reportId) {
        return reportDao.getReport(reportId);
    }


}
