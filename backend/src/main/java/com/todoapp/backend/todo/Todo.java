package com.todoapp.backend.todo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.todoapp.backend.tag.Tag;
import com.todoapp.backend.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Getter
  @Setter
  private Long id;

  @ManyToOne
  @JsonIgnore
  @Getter
  @Setter
  private Tag tag;

  @ManyToOne
  @JsonIgnore
  @Getter
  @Setter
  private User user;

  @Getter
  @Setter
  private String content;

  @Getter
  @Setter
  private Boolean done;

  @Getter
  @Setter
  private Date date;

  public Todo(Long id, String content, Boolean done, Date date, Tag tag) {
    this.id = id;
    this.content = content;
    this.done = done;
    this.date = date;
    this.tag = tag;
  }

  public Todo() {
  }

}
