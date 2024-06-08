package com.todoapp.backend.tag;

import java.util.List;
import java.util.Set;

import com.todoapp.backend.todo.Todo;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Tag {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private String color;

  @OneToMany(mappedBy = "tag")
  private List<Todo> todos;

  public Tag(Long id, String name, String color, List<Todo> todos) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.todos = todos;
  }

  public Tag() {

  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  @Override
  public String toString() {
    return "Tag [id=" + id + ", name=" + name + ", color=" + color + "]";
  }

  public List<Todo> getTodos() {
    return todos;
  }

  public void setTodos(List<Todo> todos) {
    this.todos = todos;
  }

}
