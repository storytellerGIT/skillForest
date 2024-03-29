package com.example.demo.entity;

import java.util.Date;

public class Message {
    private String messageid;
    private String receiver;
    private String sender;
    private String title;
    private Date sendTime;
    private String content;

    public String getMessageid() {
        return messageid;
    }

    public void setMessageid(String messageId) {
        this.messageid = messageId;
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

    public Date getTime() {
        return sendTime;
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
