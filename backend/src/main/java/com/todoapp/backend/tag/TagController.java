package com.todoapp.backend.tag;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todoapp.backend.todo.TodoRepository;

@RestController
public class TagController {

  private TagRepository tagRepository;

  public TagController(TagRepository tagRepository, TodoRepository todoRepository) {
    this.tagRepository = tagRepository;
  }

  @GetMapping("/tags")
  public List<Tag> getTags() {
    return tagRepository.findAll();
  }

  @PostMapping("/tags")
  public Tag addTag(@RequestBody Tag tag) {
    Tag savedTag = tagRepository.save(tag);

    return savedTag;
  }

}
