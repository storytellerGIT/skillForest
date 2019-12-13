package com.example.demo.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/source")
public class SourceController {

    @RequestMapping(value = "/rule", method = RequestMethod.GET)
    public Map<String, String> getRule()
    {
        Map<String, String> modelmap = new HashMap<String, String>();
        String rule;
        rule =
                "1.\t为维护社区良好生态，请用户注册时发布可提供帮助和所需帮助。\n" +
                "2.\t在社区内如对某位用户发布的需求感到匹配，请点击“感兴趣”（心形）按钮。该条需求将被暂时从首页撤下来，以等待对方答复。\n" +
                "3.\t消息发布者将在“消息”中看到点击“感兴趣”的用户的标识，可以进入资料页以判断是否愿意和这位用户匹配。\n" +
                "4.\t在用户注册的时候，可选择隐藏或公开部分个人资料。\n" +
                "5.\t消息发布者若同意该条匹配，则将进入会话界面；若拒绝该条匹配，原信息会重新发布在社区内，等待下次匹配。\n" +
                "6.\t社区为保证用户双方的安全，设置信用值，可通过评分、举报等，增减信用值，为后续用户匹配提供参考。\n" +
                "7.\t用户点击举报后，该条举报将会被后台处理，并给予用户答复。\n";

        modelmap.put("rule", rule);

        return  modelmap;
    }

}
