package com.todoapp.backend.user;

import java.util.List;

import com.todoapp.backend.todo.Todo;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Table(name = "_User")
public class User {
  @Id
  @Getter
  @Setter
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Getter
  @Setter
  private String username;

  @Getter
  @Setter
  private String password;

  @Getter
  @Setter
  @Email
  private String email;

  @OneToMany(mappedBy = "user")
  @Getter
  @Setter
  private List<Todo> todos;

  public User(Long id, String username, String password, @Email String email) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
  }

  public User() {
  }

}
