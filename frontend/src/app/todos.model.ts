export interface Tag {
  id: number;
  name: string,
  color: string
}

export interface Todo {
  id: number;
  tagId: number;
  content: string;
  done: boolean;
  date: Date;
  time: string;
}

export interface Time {
  hours: number;
  minutes: number
}