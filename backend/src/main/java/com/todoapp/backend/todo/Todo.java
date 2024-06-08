package com.todoapp.backend.todo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.todoapp.backend.tag.Tag;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JsonIgnore
  private Tag tag;

  private String content;

  private Boolean done;

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

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Boolean getDone() {
    return done;
  }

  public void setDone(Boolean done) {
    this.done = done;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  @Override
  public String toString() {
    return "Todo [id=" + id + ", content=" + content + ", done=" + done + ", date=" + date + "]";
  }

  public Tag getTag() {
    return tag;
  }

  public void setTag(Tag tag) {
    this.tag = tag;
  }

}
