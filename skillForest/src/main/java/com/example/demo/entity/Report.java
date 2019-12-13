package com.example.demo.entity;

import java.util.Date;

public class Report {
    private String reportId;
    private String reporterId;
    private String opposite;
    private String orderId;
    private String reason;
    private String reporterContact;
    private String oppositeContact;
    private Date reportTime;
    private Integer status;

    public String getReportId() {
        return reportId;
    }

    public String getReporterId() {
        return reporterId;
    }

    public void setReporterId(String reporterId) {
        this.reporterId = reporterId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getOpposite() {
        return opposite;
    }

    public void setOpposite(String opposite) {
        this.opposite = opposite;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getReporterContact() {
        return reporterContact;
    }

    public void setReporterContact(String reporterContact) {
        this.reporterContact = reporterContact;
    }

    public String getOppositeContact() {
        return oppositeContact;
    }

    public void setOppositeContact(String oppositeContact) {
        this.oppositeContact = oppositeContact;
    }

    public Date getReportTime() {
        return reportTime;
    }

    public void setReportTime(Date reportTime) {
        this.reportTime = reportTime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
