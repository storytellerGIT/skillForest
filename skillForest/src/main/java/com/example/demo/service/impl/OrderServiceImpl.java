package com.example.demo.service.impl;

import com.example.demo.dao.OrderDao;
import com.example.demo.entity.Order;
import com.example.demo.entity.OrderUser;
import com.example.demo.entity.User;
import com.example.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderDao orderDao;

    @Override
    public List<OrderUser> getOrderList(User user) {
        List<OrderUser> data = orderDao.queryOrder();
        ArrayList<String> want = new ArrayList<String>();
        for(int i=0 ; i < data.size(); i++)
        {
            data.get(i).setMy(data.get(i).getMy().replace('_', ','));
            data.get(i).setWant(data.get(i).getWant().replace('_', ','));
        }
        for(int i=0; i<data.size(); i++)
        {
            if(data.get(i).getUserOpenId().equals(user.getOpenid()))
            {
                String[] temp = data.get(i).getWant().split(",");
                for (int j=0; j<temp.length; j++)
                {
                    want.add(temp[j]);
                }
            }
        }
        for(int i=0; i<data.size(); i++)
        {
            double hot = 0;
            hot = data.get(i).getCredits();
            if(data.get(i).getSchool().equals(user.getSchool()))
            {
                hot += 5;
            }
            String[] temp = data.get(i).getMy().split(",");
            for(int j=0; j<temp.length; j++)
            {
                if(want.contains(temp[j]))
                {
                    hot += 30;
                }
            }
            data.get(i).setHot((int)hot);
        }
        Collections.sort(data, new Comparator<OrderUser>(){
            public int compare(OrderUser p1, OrderUser p2) {
                if(p1.getHot() < p2.getHot()){
                    return 1;
                }
                if(p1.getHot() == p2.getHot()){
                    return 0;
                }
                return -1;
            }
        });
        return data;
    }

    @Override
    public List<OrderUser> getOrderListVisitor() {
        List<OrderUser> data = orderDao.queryOrder();
        ArrayList<String> want = new ArrayList<String>();
        for(int i=0 ; i < data.size(); i++)
        {
            data.get(i).setMy(data.get(i).getMy().replace('_', ','));
            data.get(i).setWant(data.get(i).getWant().replace('_', ','));
        }

        return data;
    }

    @Override
    public List<OrderUser> searchOrder(String label)
    {
        System.out.println(label);
        System.out.println(orderDao.queryOrderByLabel("%"+label+"%"));
        List<OrderUser> data = orderDao.queryOrderByLabel("%"+label+"%");
        for(int i=0; i<data.size(); i++)
        {
            data.get(i).setMy(data.get(i).getMy().replace('_', ','));
            data.get(i).setWant(data.get(i).getWant().replace('_', ','));
        }
        return data;
    }

    @Override
    public Order getOrderDetail(String orderid) {
        Order data = orderDao.queryOrderById(orderid);
        data.setMy(data.getMy().replace('_', ','));
        data.setWant(data.getWant().replace('_', ','));

        return data;
    }

    @Override
    public boolean addOrder(Order order) {
        int flag = orderDao.insertOrder(order);
        if(flag == 0)
            return false;
        else
            return true;
    }

    @Override
    public List<OrderUser> getUserOrder(String userId) {
        List<OrderUser> data = orderDao.queryOrderByUser(userId);
        for(int i=0 ; i < data.size(); i++)
        {
            data.get(i).setMy(data.get(i).getMy().replace('_', ','));
            data.get(i).setWant(data.get(i).getWant().replace('_', ','));
        }

        for (int i=0; i<data.size(); i++)
        {
            if(data.get(i).getStatus()==2 && data.get(i).getUserOpenId().equals(userId)==false)
            {
                data.remove(i);
                i--;
            }
        }
        return data;
    }

    @Override
    public boolean updateStatus(String orderid, int newStatus) {
        int flag = orderDao.updateStatus(orderid, newStatus);
        if(flag == 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    @Override
    public boolean updateCompleteWith(String orderId, String userid) {
        int flag = orderDao.updateCompleteWith(orderId, userid);
        if(flag == 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }


}
