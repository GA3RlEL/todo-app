export interface Tag {
  id:string,
  name: string,
  color: string
}

export interface AddTag {
  name: string;
  color: string;
}

export interface Todo {
  id: number;
  tagId: string;
  content: string;
  done: boolean;
  date: Date;
}

export interface Time {
  hours: number;
  minutes: number
}
