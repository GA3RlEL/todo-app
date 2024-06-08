package com.todoapp.backend.tag;

import java.util.List;

import com.todoapp.backend.todo.Todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
public class Tag {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Getter
  @Setter
  private Long id;

  @Getter
  @Setter
  private String name;

  @Getter
  @Setter
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

}
