package com.todoapp.backend.todo;

import java.util.Date;

import com.todoapp.backend.tag.Tag;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Todo {

  @Id
  @GeneratedValue
  private Long id;
  @ManyToOne
  @JoinColumn(name = "tag_id", nullable = false)
  private Tag tag;
  @Column
  private String content;
  @Column
  private Boolean done;
  @Column
  private Date date;

  public Todo(Long id, Tag tag, String content, Boolean done, Date date) {
    this.id = id;
    this.tag = tag;
    this.content = content;
    this.done = done;
    this.date = date;
  }

  @Override
  public String toString() {
    return "Todo [id=" + id + ", tag=" + tag + ", content=" + content + ", done=" + done + ", date=" + date + "]";
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Tag getTag() {
    return tag;
  }

  public void setTag(Tag tag) {
    this.tag = tag;
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

}
