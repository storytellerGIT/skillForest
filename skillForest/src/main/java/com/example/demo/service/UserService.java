package com.example.demo.service;

import com.example.demo.entity.User;

public interface UserService {

    boolean checkUser(String userId);

    boolean addNewUser(User user);

    User myInfo(String userId);

    boolean updateInfo(User user);

    int myCredit(String userId);

    User getUser(String userid);
}
