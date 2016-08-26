package org.xman.angular2.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xman.angular2.model.Hero;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Controller
@RequestMapping("/app")
public class AppController {
    private AtomicInteger atom = new AtomicInteger(20);
    private List<Hero> heroList;

    public AppController() {
        heroList = new ArrayList<>();
        heroList.add(new Hero(11, "关羽"));
        heroList.add(new Hero(12, "张飞"));
        heroList.add(new Hero(13, "赵云"));
        heroList.add(new Hero(14, "黄忠"));
        heroList.add(new Hero(15, "马超"));
        heroList.add(new Hero(16, "张辽"));
        heroList.add(new Hero(17, "张郃"));
        heroList.add(new Hero(18, "庞德"));
        heroList.add(new Hero(19, "周瑜"));
        heroList.add(new Hero(20, "孙策"));
    }

    @RequestMapping(value = "/heroes", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Hero> getHeroes() {
        return heroList;
    }

    @RequestMapping(value = "/heroes", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Integer> saveHeroes(Hero hero) {
        Map<String, Integer> map = new HashMap<>();
        map.put("code", 1);

        hero.setId(atom.incrementAndGet());
        heroList.add(hero);

        return map;
    }
}
