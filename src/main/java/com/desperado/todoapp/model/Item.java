package com.desperado.todoapp.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "items")
@Getter
@Setter
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private Boolean complete = Boolean.FALSE;
    private Boolean important = Boolean.FALSE;
    private String mark = LocalDate.now().toString();

    public Item() {
    }

    public Item(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
