Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo:  function(){

      // Get the todo title set by the "New Todo" text field
      var title = this.get("newTitle");

      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', { title: title, isCompleted: false });

      // Clear the new todo textfield
      this.set("newTitle", "");

      todo.save();
    }
  }
});