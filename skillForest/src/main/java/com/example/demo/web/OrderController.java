package com.example.demo.web;

import com.example.demo.entity.Message;
import com.example.demo.entity.Order;
import com.example.demo.entity.User;
import com.example.demo.service.MessageService;
import com.example.demo.service.OrderService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;
    @Autowired
    private MessageService messageService;

    @RequestMapping(value = "/getOrderList", method = RequestMethod.GET)
    private Map<String, Object> getOrderList(String userid){
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("orderList", orderService.getOrderList(userService.getUser(userid)));

        return modelMap;
    }

    @RequestMapping(value = "/getOrderListVisitor", method = RequestMethod.GET)
    private Map<String, Object> getOrderListVisitor(){
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("orderList", orderService.getOrderListVisitor());

        return modelMap;
    }

    @RequestMapping(value = "/getOrderDetail", method = RequestMethod.GET)
    private Map<String, Object> getOrderDetail(String orderid){
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("orderDetail", orderService.getOrderDetail(orderid));

        return modelMap;
    }

    @RequestMapping(value = "/searchOrder", method = RequestMethod.GET)
    private Map<String, Object> searchOrder(String label)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("orderList", orderService.searchOrder(label));

        return modelMap;
    }

    @RequestMapping(value = "/addOrder", method = RequestMethod.POST)
    private Map<String, Object> addOrder(@RequestBody Order order)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        Date nowTime = new Date();
        order.setCreateTime(nowTime);
        order.setOrderId(""+order.getUserOpenId()+nowTime.getTime());
        order.setStatus(1);
        modelMap.put("success", orderService.addOrder(order));

        return modelMap;
    }

    @RequestMapping(value = "/getUserOrder", method = RequestMethod.GET)
    private Map<String, Object> getUserOrder(String userid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("orderList", orderService.getUserOrder(userid));

        return modelMap;
    }

    @RequestMapping(value = "/finishOrder", method = RequestMethod.GET)
    private Map<String, Object> finishOrder(String orderid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("success", orderService.updateStatus(orderid, 3));
        User temp = userService.getUser(orderService.getOrderDetail(orderid).getUserOpenId());
        temp.setCredits(temp.getCredits()+10);
        userService.getUser(orderService.getOrderDetail(orderid).getCompleteWith()).setCredits(userService.getUser(orderService.getOrderDetail(orderid).getCompleteWith()).getCredits()+10);
        userService.updateInfo(temp);
        Message newMessage = new Message();
        Date nowTime = new Date();
        newMessage.setMessageid(""+temp.getOpenid()+nowTime.getTime());
        newMessage.setReceiver(temp.getOpenid());
        newMessage.setSender("系统");
        newMessage.setTitle("可以开始互助啦！");
        newMessage.setSendTime(nowTime);
        newMessage.setContent("恭喜您，您和您的小伙伴的互助信息已经达成一致啦！你们可以开始互助啦，相信你们一定可以在互助中共同进步！");
        messageService.addMessage(newMessage);

        return modelMap;
    }

    @RequestMapping(value = "/interestOrder", method = RequestMethod.GET)
    private Map<String, Object> interestOrder(String orderid, String userid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        Order order = orderService.getOrderDetail(orderid);
        if(order.getUserOpenId().equals(userid) == true)
        {
            modelMap.put("success", false);
        }
        else
        {
            modelMap.put("success", orderService.updateStatus(orderid, 2));

            orderService.updateCompleteWith(orderid, userid);
        }

        return modelMap;
    }

    @RequestMapping(value = "/notInterestOrder", method = RequestMethod.GET)
    private Map<String, Object> notInterestOrder(String orderid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("success", orderService.updateStatus(orderid, 1));

        Message notIntersetMessage = new Message();
        Date nowTime = new Date();
        String userid = orderService.getOrderDetail(orderid).getCompleteWith();
        notIntersetMessage.setMessageid(""+userid+nowTime.getTime());
        notIntersetMessage.setReceiver(userid);
        notIntersetMessage.setSender("系统");
        notIntersetMessage.setTitle("很遗憾");
        notIntersetMessage.setSendTime(nowTime);
        notIntersetMessage.setContent("非常抱歉，您的互助请求已被拒接。不要灰心，更好的互助伙伴正等着与你相遇。");
        messageService.addMessage(notIntersetMessage);

        orderService.updateCompleteWith(orderid,null);

        return modelMap;
    }
}
