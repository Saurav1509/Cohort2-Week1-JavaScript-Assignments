/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {  

  constructor(){
    this.todo = [];
  }

  // Adding things to do in the List 
  add(str){
    this.todo.push(str);
  }

  // Removing things to do in the List 
  remove(index){

    if(index == (this.todo.length -1))
    {
      this.todo.pop();
      return;
    }
    else if(index == 0){
      this.todo.shift();
    }
    else if(index >=0 && index < this.todo.length){
      this.todo[index] = this.todo[index+1];
      this.todo.pop();
      // for(i = 0; i < this.todo.length; i++)
      // {
        // if(i == index)
        // {
          // console.log("reached")
          // for(let j = i; j < (this.todo.length -1); j++)
          // {
            // this.todo[j] = this.todo[j+i];
            // this.todo.pop();
          // }
          // break;
        // }
      // }
    }
  }

  //Updating a List item from the Todo List
  update(index, str){
    if( index >=0 && index < this.todo.length){
      this.todo[index] = str;
    }
    else{
      return;
    }

  }

  // Return the List item at the given index item
  get(index){
    if( index >=0 && index < this.todo.length){
      return this.todo[index];
    }
    else{
      return null;
    }
  }

  // Return the whole Todo List
  getAll(){

    return this.todo;

  }

  //Delete the whole todo List
  clear(){
    while(this.todo.length > 0)
    {
      this.todo.pop();
    }
  }
}

module.exports = Todo;
