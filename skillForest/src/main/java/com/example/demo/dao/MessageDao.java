package com.example.demo.dao;

import com.example.demo.entity.Message;
import com.example.demo.entity.MessageUser;

import java.util.List;

public interface MessageDao {

    List<MessageUser> queryMessage(String userid);

    Message queryMessageById(String messageId);

    int insertMessage(Message message);
}
