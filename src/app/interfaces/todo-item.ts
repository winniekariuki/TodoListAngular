export interface TodoItem {
    title: string;
    completed? : boolean; 
  }

export interface TodoItems extends  Array <TodoItem>{}