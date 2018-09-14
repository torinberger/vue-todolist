
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
      todoList: [
        {id: 0, title: "do stuff"},
        {id: 1, title: "do more"}
      ]
    }
  });

}
