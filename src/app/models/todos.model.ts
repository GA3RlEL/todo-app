export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface AddTag {
  name: string;
  color: string;
}

export interface Todo {
  tagId: string;
  content: string;
  done: boolean;
  date: any;
  user_id: string | null;
}
