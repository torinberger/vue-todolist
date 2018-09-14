
window.onload = function () {

  Vue.component('todo-item', {
    props: ['title'],
    template: `
      <li>{{ title }}</li>
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
        this.todoList.push({id: this.todoList.length, title: this.addItemTitle});

        this.addItemTitle = '';
      }
    }
  });

}
