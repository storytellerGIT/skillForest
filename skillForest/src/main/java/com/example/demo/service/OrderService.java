package com.example.demo.service;

import com.example.demo.entity.Order;
import com.example.demo.entity.OrderUser;
import com.example.demo.entity.User;

import java.util.List;

public interface OrderService {

    List<OrderUser> getOrderList(User user);

    List<OrderUser> getOrderListVisitor();

    List<OrderUser> searchOrder(String label);

    Order getOrderDetail(String orderid);

    boolean addOrder(Order order);

    List<OrderUser> getUserOrder(String userId);

    boolean updateStatus(String orderid, int newStatus);

    boolean updateCompleteWith(String orderId, String userid);
}
