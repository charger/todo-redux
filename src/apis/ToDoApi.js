import Api from './Api';

var ToDoApi = Object.assign(new Api(), {
  createItem: function(title, is_done){
    return this._makeRequest('/todo/', 'POST', {}, { todo: {title: title, is_done: is_done} }, 'json');
  },

  deleteItem: function(id){
    return this._makeRequest('/todo/'+id, 'DELETE', {}, {}, 'json');
  },

  getItems: function(){
    return this._makeRequest('/todo/', 'GET', {}, {}, 'json');
  },

  updateItem: function(id, data){
    return this._makeRequest('/todo/' + id, 'PATCH', {}, {todo: data}, 'json');
  },
});

export default ToDoApi;
