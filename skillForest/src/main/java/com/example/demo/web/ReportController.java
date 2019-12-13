package com.example.demo.web;

import com.example.demo.entity.Message;
import com.example.demo.entity.Report;
import com.example.demo.entity.User;
import com.example.demo.service.MessageService;
import com.example.demo.service.OrderService;
import com.example.demo.service.ReportService;
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
@RequestMapping("/report")
public class ReportController {

    @Autowired
    private ReportService reportService;
    @Autowired
    private MessageService messageService;
    @Autowired
    private UserService userService;
    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/newReport", method = RequestMethod.POST)
    private Map<String, Object> newReport(@RequestBody Report report)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        Date nowTime = new Date();
        Message returnMessage = new Message();

        report.setReportId(""+report.getReporterId()+nowTime.getTime());
        report.setReportTime(nowTime);
        report.setStatus(0);
        boolean flag = reportService.newReport(report);
        if(flag == true)
        {
            returnMessage.setMessageid(""+report.getReporterId()+nowTime.getTime());
            returnMessage.setReceiver(report.getReporterId());
            returnMessage.setSender("系统");
            returnMessage.setTitle("您已成功提交举报信息");
            returnMessage.setSendTime(nowTime);
            returnMessage.setContent("您在"+nowTime.toString()+"举报的用户“"+userService.getUser(report.getOpposite()).getNickName()+"”信息已成功提交至后台。管理员员将会根据您提供的联系方式联系双方核实信息。待处理结束后将会告知处理您处理结果，请您耐心等待。");
            messageService.addMessage(returnMessage);

            orderService.updateStatus(report.getOrderId(), 4);
        }
        modelMap.put("success", flag);

        return modelMap;
    }

    @RequestMapping(value = "/confirmReport", method = RequestMethod.GET)
    public Map<String, Object> confirmReport(String reportId, int credit)
    {
        Message successMessage = new Message();
        Message oppositeMessage = new Message();
        Date nowTime = new Date();
        Map<String, Object> modelMap = new HashMap<String, Object>();
        String reporterId = reportService.getReport(reportId).getReporterId();
        String opposite = reportService.getReport(reportId).getOpposite();

        successMessage.setMessageid(""+reporterId+nowTime.getTime());
        successMessage.setReceiver(reporterId);
        successMessage.setSender("系统");
        successMessage.setTitle("举报信息反馈");
        successMessage.setSendTime(nowTime);
        successMessage.setContent("您在"+reportService.getReport(reportId).getReportTime().toString()+"举报的用户“"+userService.getUser(reportService.getReport(reportId).getOpposite()).getNickName()+"”已经处理完毕。现告知您处理结果：您您的举报信息真实有效，我们将对该用户做出罚扣"+credit+"积分处理，将若再犯，我们将会处以更严重的处罚。感谢您的举报。");
        messageService.addMessage(successMessage);

        oppositeMessage.setMessageid(""+opposite+nowTime.getTime());
        oppositeMessage.setReceiver(opposite);
        oppositeMessage.setSender("系统");
        oppositeMessage.setTitle("您已被以“"+reportService.getReport(reportId).getReason()+"”为理由举报。经管理员审核，举报信息真实有效，先做出罚扣您"+credit+"积分的处理。如若您再被举报，我们将会对您做出更加严厉的处罚！");
        oppositeMessage.setSendTime(nowTime);
        oppositeMessage.setContent("");
        messageService.addMessage(oppositeMessage);

        User temp = userService.getUser(reportService.getReport(reportId).getOpposite());
        temp.setCredits(temp.getCredits()-credit);
        userService.updateInfo(temp);

        modelMap.put("success", reportService.confirmReport(reportId));

        return modelMap;
    }

    @RequestMapping(value = "/denyReport", method = RequestMethod.GET)
    private  Map<String, Object> denyReport(String reportId)
    {
        Message failMessage = new Message();
        Date nowTime = new Date();
        Map<String, Object> modelMap = new HashMap<String, Object>();
        String reporterId = reportService.getReport(reportId).getReporterId();

        failMessage.setMessageid(""+reporterId+nowTime.getTime());
        failMessage.setReceiver(reporterId);
        failMessage.setSender("系统");
        failMessage.setTitle("举报信息反馈");
        failMessage.setSendTime(nowTime);
        failMessage.setContent("您在"+reportService.getReport(reportId).getReportTime().toString()+"举报的用户“"+userService.getUser(reportService.getReport(reportId).getOpposite()).getNickName()+"”经管理员审核，不存在违规的情况，本平台将不处罚该用户。感谢您的举报。");
        messageService.addMessage(failMessage);
        orderService.updateStatus(reportService.getReport(reportId).getOrderId(), 3);

        modelMap.put("success", reportService.denyReport(reportId));

        return modelMap;
    }

    @RequestMapping(value = "/getNewReport", method = RequestMethod.GET)
    private Map<String, Object> getNewReport()
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("ReportList", reportService.getNewReport());

        return modelMap;
    }

    @RequestMapping(value = "/getAllReport", method = RequestMethod.GET)
    private Map<String, Object> getAllReport()
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("success", reportService.getAllReport());

        return modelMap;
    }
}
