package com.example.demo.entity;

import java.util.Date;

public class MessageUser {
    private String messageid;
    private String receiver;
    private String sender;
    private String title;
    private String sendTime;
    private String content;

    private String openid;
    private String iconUrl;
    private String nickName;
    private String school;
    private Boolean schoolHide;
    private String academy;
    private Boolean academyHide;
    private String grade;
    private Boolean gradeHide;
    private String major;
    private Boolean majorHide;
    private Date registerTime;
    private Integer credits;

    public String getMessageid() {
        return messageid;
    }

    public void setMessageid(String messageid) {
        this.messageid = messageid;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSendTime() {
        return sendTime;
    }

    public void setSendTime(String sendTime) {
        this.sendTime = sendTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public Boolean getSchoolHide() {
        return schoolHide;
    }

    public void setSchoolHide(Boolean schoolHide) {
        this.schoolHide = schoolHide;
    }

    public String getAcademy() {
        return academy;
    }

    public void setAcademy(String academy) {
        this.academy = academy;
    }

    public Boolean getAcademyHide() {
        return academyHide;
    }

    public void setAcademyHide(Boolean academyHide) {
        this.academyHide = academyHide;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Boolean getGradeHide() {
        return gradeHide;
    }

    public void setGradeHide(Boolean gradeHide) {
        this.gradeHide = gradeHide;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public Boolean getMajorHide() {
        return majorHide;
    }

    public void setMajorHide(Boolean majorHide) {
        this.majorHide = majorHide;
    }

    public Date getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(Date registerTime) {
        this.registerTime = registerTime;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }

}
