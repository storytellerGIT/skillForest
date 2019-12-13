package com.example.demo.dao;

import com.example.demo.entity.Order;
import com.example.demo.entity.OrderUser;

import java.util.List;

public interface OrderDao {

    List<OrderUser> queryOrder();

    Order queryOrderById(String orderId);

    List<OrderUser> queryOrderByLabel(String label);

    int insertOrder(Order order);

    List<OrderUser> queryOrderByUser(String userId);

    int updateStatus(String orderId, int newStatus);

    int updateCompleteWith(String orderId, String userid);
}
