package com.desperado.todoapp.service;

import com.desperado.todoapp.model.Item;
import com.desperado.todoapp.repository.ItemRepository;

import java.util.List;

public interface ItemService {
    public String saveItem(Item item);

    public List<Item> getAllItems();

    public void deleteItem(Long id);


    public ItemRepository getItemRepository();


}
