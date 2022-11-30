package com.desperado.todoapp.service;

import com.desperado.todoapp.model.Item;
import com.desperado.todoapp.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService{

    @Autowired
    ItemRepository itemRepository;

    @Override
    public String saveItem(Item item) {
        return itemRepository.save(item).toString();
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    @Override
    public ItemRepository getItemRepository() {
        return itemRepository;
    }
}
