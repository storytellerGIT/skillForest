package com.example.demo.service;

import com.example.demo.entity.Message;
import com.example.demo.entity.MessageUser;

import java.util.List;

public interface MessageService {

    List<MessageUser> getMessageList(String userid);

    Message getMessageDetail(String messageid);

    boolean addMessage(Message message);
}
