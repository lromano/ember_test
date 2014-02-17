Todos.TodoController = Ember.ObjectController.extend({

  isCompleted: function (key, value) {
    var model = this.get("model");

    if(value == undefined) {
      // Property being used as a getter
      return model.get('isCompleted');
    }
    else {
      // Property being used as a setter
      return model.set('isCompleted', value);
      model.save();
      return value;
    }

  }.property('model.isCompleted')
});