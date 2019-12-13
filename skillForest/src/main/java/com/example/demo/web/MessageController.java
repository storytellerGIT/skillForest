package com.example.demo.web;

import com.example.demo.entity.Message;
import com.example.demo.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @RequestMapping(value = "/messageList", method = RequestMethod.GET)
    private Map<String, Object> messageList(String userid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();

        modelMap.put("MessageList", messageService.getMessageList(userid));

        return modelMap;
    }

    @RequestMapping(value = "/messageDetail", method = RequestMethod.GET)
    private Map<String, Object> messageDetail(String messageid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("MessageDetail", messageService.getMessageDetail(messageid));

        return modelMap;
    }

    @RequestMapping(value = "/addMessage", method = RequestMethod.POST)
    private Map<String, Object> addMessage(@RequestBody Message message)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        if(message.getSender().equals(message.getReceiver()))
        {
            modelMap.put("success",false);
            return modelMap;
        }
        Date nowTime = new Date();
        message.setSendTime(nowTime);
        message.setMessageid(""+message.getReceiver()+message.getSender()+nowTime.getTime());
        message.setTitle("有人对你发布的信息感兴趣了");
        message.setContent("您对该技能感兴趣很久了\n" + "期待您尽快安排上哦！\n" + "青春不必等待，现在就是最好的时机行动～\n"+"如果你们已经取得了联系，并且互相愿意帮助的话，请在历史订单中确定，我们将会把您发布的这条信息下架，并为双方添加积分。");
        modelMap.put("success", messageService.addMessage(message));

        return modelMap;
    }

    @RequestMapping(value = "/registerMessage", method = RequestMethod.GET)
    private Map<String, Object>  registerMessage(String receiver)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        Message message = new Message();
        Date nowTime = new Date();


        message.setMessageid(""+receiver+nowTime.getTime());
        message.setReceiver(receiver);
        message.setSender("系统");
        message.setTitle("欢迎加入我们");
        message.setSendTime(nowTime);
        String newMessage = "世界因多样而精彩，期待因你的加入社区变得不同！我们也真诚的希望您可以通过技能交换成为更好的自己。开始之前，请您阅读社区规章以便更好地融入我们！请开启您的技能交换之旅吧！";
        message.setContent(newMessage);

        modelMap.put("message", messageService.addMessage(message));

        return modelMap;
    }
}
