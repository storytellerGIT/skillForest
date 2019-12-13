package com.example.demo.entity;

import java.util.Date;

public class Order {
    private String orderId;
    private String userOpenId;
    private String want;
    private String my;
    private String description;
    private Date createTime;
    private String contactQQ;
    private String contactWeChat;
    private String contactPhone;
    private String completeWith;
    private Integer status;
    private Integer hot;

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getUserOpenId() {
        return userOpenId;
    }

    public void setUserOpenId(String userOpenId) {
        this.userOpenId = userOpenId;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getWant() {
        return want;
    }

    public void setWant(String want) {
        this.want = want;
    }

    public String getMy() {
        return my;
    }

    public void setMy(String my) {
        this.my = my;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getContactQQ() {
        return contactQQ;
    }

    public void setContactQQ(String contactQQ) {
        this.contactQQ = contactQQ;
    }

    public String getContactWeChat() {
        return contactWeChat;
    }

    public void setContactWeChat(String contactWeChat) {
        this.contactWeChat = contactWeChat;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getCompleteWith() {
        return completeWith;
    }

    public void setCompleteWith(String completeWith) {
        this.completeWith = completeWith;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Integer getHot() {
        return hot;
    }

    public void setHot(Integer hot) {
        this.hot = hot;
    }
}
