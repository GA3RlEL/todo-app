package com.todoapp.backend.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
public class TodoController {

  @Autowired
  private TodoRepository todoRepository;

  @GetMapping("/todos")
  public List<Todo> getTodos() {
    return todoRepository.findAll();
  }

  @PostMapping("/todos")
  public Todo addTodo(@Valid @RequestBody Todo todo) {
    todoRepository.save(todo);
    return todo;
  }

}
