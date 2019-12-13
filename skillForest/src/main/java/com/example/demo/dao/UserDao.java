package com.example.demo.dao;

import com.example.demo.entity.User;

public interface UserDao {

    User queryUser(String userId);

    int insertUser(User user);

    int updateUser(User user);
}
