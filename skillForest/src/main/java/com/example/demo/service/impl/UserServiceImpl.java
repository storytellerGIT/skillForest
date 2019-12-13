package com.example.demo.service.impl;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public boolean checkUser(String userId) {
        boolean check = userDao.queryUser(userId)!=null;
        return check;
    }

    @Override
    public boolean addNewUser(User user) {
        int flag = userDao.insertUser(user);
        if(flag > 0)
            return true;
        else
            return false;
    }

    @Override
    public User myInfo(String userId) {

        return userDao.queryUser(userId);
    }

    @Override
    public boolean updateInfo(User user) {
        if(user.getSchool().equals(""))
            user.setSchool(null);
        if(user.getAcademy().equals(""))
            user.setAcademy(null);
        if(user.getGrade().equals(""))
            user.setGrade(null);
        if(user.getMajor().equals(""))
            user.setMajor(null);
        if(user.getNickName().equals(""))
            user.setNickName(null);
        if(user.getIconUrl().equals(""))
            user.setIconUrl(null);
        if(user.getCredits() == -1)
            user.setCredits(null);

        int flag = userDao.updateUser(user);
        if(flag > 0)
            return true;
        else
            return false;
    }

    @Override
    public int myCredit(String userId) {

        return userDao.queryUser(userId).getCredits();
    }

    @Override
    public User getUser(String userid) {
        return userDao.queryUser(userid);
    }
}
