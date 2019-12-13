package com.example.demo.web;

import com.example.demo.entity.Area;
import com.example.demo.entity.User;
import com.example.demo.entity.WXSessionModel;
import com.example.demo.service.HttpClientUtil;
import com.example.demo.service.JsonUtils;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public Map<String, String> wxLogin(String code) {
        String clientUrl = "https://api.weixin.qq.com/sns/jscode2session";
        Map<String, String> param = new HashMap<String, String>();
        param.put("appid", "wx23aa5df98e36f882");
        param.put("secret", "65e6a46a50a01fff1acd6a037931c256");
        param.put("js_code", code);
        param.put("grant_type", "authorization_code");

        String wxResult = HttpClientUtil.doGet(clientUrl, param);
        WXSessionModel model = JsonUtils.jsonToPojo(wxResult, WXSessionModel.class);
        Map<String, String> modelMap = new HashMap<String, String>();
        modelMap.put("id",model.getOpenid());

        return modelMap;
    }

    @RequestMapping(value = "/checkUser", method = RequestMethod.GET)
    private Map<String, Object> checkUser(String userid){
        Map<String, Object> modelMap = new HashMap<String, Object>();
        Boolean check = userService.checkUser(userid);
        modelMap.put("checkUser", check);
        return modelMap;
    }

    @RequestMapping(value = "/getCredits", method = RequestMethod.GET)
    private Map<String, Object> getCredits(String userid){
        Map<String, Object> modelMap = new HashMap<String, Object>();
        Integer credit = userService.myCredit(userid);
        modelMap.put("credits", credit);
        return modelMap;
    }

    @RequestMapping(value = "/getInfo", method = RequestMethod.GET)
    private Map<String, Object> getInfo(String userid){
        Map<String, Object> modelMap = new HashMap<String, Object>();
        User user = userService.myInfo(userid);

        modelMap.put("school", user.getSchool());
        modelMap.put("school_hide",user.getSchoolHide());
        modelMap.put("academy",user.getAcademy());
        modelMap.put("academy_hide",user.getAcademyHide());
        modelMap.put("grade",user.getGrade());
        modelMap.put("grade_hide",user.getGradeHide());
        modelMap.put("major",user.getMajor());
        modelMap.put("major_hide",user.getMajorHide());
        modelMap.put("credits", user.getCredits());

        return modelMap;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    private Map<String, Object> register(@RequestBody User user)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        user.setRegisterTime(new Date());
        modelMap.put("success", userService.addNewUser(user));

        return modelMap;
    }

    @RequestMapping(value = "/updateInfo", method = RequestMethod.POST)
    @ResponseBody
    private Map<String, Object> updateInfo(@RequestBody User user)
    {

        Map<String, Object> modelMap = new HashMap<String, Object>();
        modelMap.put("success", userService.updateInfo(user));

        return modelMap;
    }

    @RequestMapping(value = "/updateCredit", method = RequestMethod.GET)
    private Map<String, Object> updateCredit(String newCredit, String userid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        User user = new User();
        user.setCredits(Integer.parseInt(newCredit));
        user.setOpenid(userid);

        System.out.println(user.getCredits()+user.getOpenid());
        modelMap.put("success", userService.updateInfo(user));

        return modelMap;
    }

    @RequestMapping(value = "/getMyDetail", method = RequestMethod.GET)
    private Map<String, Object> getMyDetail(String userid)
    {
        Map<String, Object> modelMap = new HashMap<String, Object>();
        User user = userService.myInfo(userid);
        modelMap.put("UserInfo", user);

        return modelMap;
    }
}
