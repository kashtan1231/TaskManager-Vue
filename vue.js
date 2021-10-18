class Task {
  constructor({ name, date, user, description, state, id }) {
    this.name = name;
    this.user = user;
    this.date = date;
    this.description = description;
    this.state = state;
    this.id = id;
  }
}

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
  }),

  methods: {
    addTask() {
      this.tasks.push(new Task(this.taskNew));
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
