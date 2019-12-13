package com.example.demo.service.impl;

import com.example.demo.dao.MessageDao;
import com.example.demo.entity.Message;
import com.example.demo.entity.MessageUser;
import com.example.demo.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageDao messageDao;

    @Override
    public List<MessageUser> getMessageList(String userid) {
        return messageDao.queryMessage(userid);
    }

    @Override
    public Message getMessageDetail(String messageid) {
        return messageDao.queryMessageById(messageid);
    }

    @Override
    public boolean addMessage(Message message) {
        int flag = messageDao.insertMessage(message);
        if(flag>0)
            return true;
        else
            return false;
    }
}
