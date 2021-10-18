const app = {
  data: () => ({
    isPopItShow: false,
    string: "hui",

    tasks: [],

    taskNew: {
      name: null,
      date: null,
      user: null,
      description: null,
      state: null,
      id: 0,
    },

    task: {
      name: null,
      date: null,
      user: null,
      description: null,
      state: null,
      id: 0,
    },
  }),

  methods: {
    addTask() {
      console.log(this.tasks);
      this.tasks.push(this.taskNew);
      console.log(this.tasks);
      const i = this.task.id.length - 1;
      this.tasks[0].name = this.taskNew.name;
      this.tasks[0].date = this.taskNew.date;
      this.tasks[0].user = this.taskNew.user;
      this.tasks[0].description = this.taskNew.description;
      this.tasks[this.tasks.length - 1].state = this.taskNew.state;
      console.log(this.tasks);
    },

    keyPressed() {
      console.log("Space pressed");
    },

    inputCloneName(event) {
      this.taskNew.name = event.target.value;
    },
    inputCloneDate(event) {
      this.taskNew.date = event.target.value;
    },
    inputCloneUser(event) {
      this.taskNew.user = event.target.value;
    },
    inputCloneDesc(event) {
      this.taskNew.description = event.target.value;
    },
    inputCloneState(event) {
      this.taskNew.state = event.target.value;
    },
  },

  compute: {},

  watch: {},
};

Vue.createApp(app).mount("#app");
