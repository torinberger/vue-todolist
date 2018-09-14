
window.onload = function () {

  function getHighestKey(array) {
    var highest = -1;
    for (var i = 0; i < array.length; i++) {
      if(array[i].id > highest) {
        highest = array[i].id;
      }
    }

    return highest + 1;
  }

  Vue.component('todo-item', {
    props: ['title', 'id', 'remove'],
    template: `
      <li v-on:click="remove(id)">{{ title }}</li>
    `
  });

  const vm = new Vue({
    el: '#app',
    data: {
      addItemTitle: "",
      todoList: []
    },
    methods: {
      addItem: function () {
        if(this.addItemTitle) {
          this.todoList.push({id: getHighestKey(this.todoList), title: this.addItemTitle});

          this.addItemTitle = '';
        }
      },
      removeItem: function (index) {
        for (var i = 0; i < this.todoList.length; i++) {
          if(Number(this.todoList[i].id) == Number(index)) {
            this.todoList.splice(i, 1);
            return;
          }
        }
      }
    }
  });

}
