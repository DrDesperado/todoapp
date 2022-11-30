package com.desperado.todoapp.controller;


import com.desperado.todoapp.model.Item;
import com.desperado.todoapp.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("")
@CrossOrigin()
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> getAllItems() {
        return  itemService.getAllItems();
    }

    @PostMapping("/addtask")
    public void postItem(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
    }

    @PutMapping("/update/{id}")
    public void updateItem(@RequestBody Item newItem, @PathVariable Long id) {
        itemService.getItemRepository().findById(id)
                .map(item -> {
                    item.setTitle(newItem.getTitle());
                    item.setDescription(newItem.getDescription());
                    item.setMark(newItem.getMark());
                    item.setImportant(newItem.getImportant());
                    item.setComplete(newItem.getComplete());
                    return itemService.getItemRepository().save(item);
                });
    }


}

