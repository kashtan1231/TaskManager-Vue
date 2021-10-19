class Task {
  constructor({ name, date, user, description, state, isClassShow }) {
    this.name = name.trim();
    this.date = date;
    this.user = user.trim();
    this.description = description.trim();
    this.state = state;
    this.isClassShow = isClassShow;
  }
}

const app = {
  data: () => ({
    isPopItShow: false,
    isDeleteShow: false,
    isAttentionShow: false,
    isAttentionDateShow: false,
    isCurrTask: false,
    idx: 0,

    searchValue: "",
    optionValue: "Все",

    tasks: [],
    users: [],

    taskNew: {
      name: null,
      date: null,
      user: null,
      description: null,
      state: null,
      isClassShow: true,
    },
  }),

  methods: {
    dateComp(year, month, day, yearPop, monthPop, dayPop) {
      if (+yearPop > +year) return true;
      else if (+yearPop === +year) {
        if (+monthPop > +month) return true;
        else if (+monthPop === +month) {
          if (+dayPop >= +day) return true;
          else return false;
        } else return false;
      } else return false;
    },

    apply() {
      if (
        this.taskNew.name.trim() &&
        this.taskNew.date &&
        this.taskNew.user.trim() &&
        this.taskNew.state
      ) {
        const today = new Date();

        const [yearPop, monthPop, dayPop] = this.taskNew.date.split("-");
        const [year, month, day] = [
          today.getFullYear(),
          today.getMonth() + 1,
          today.getDate(),
        ];

        console.log(+yearPop, +monthPop, +dayPop, year, month, day);

        if (
          this.dateComp(+year, +month, +day, +yearPop, +monthPop, +dayPop) ===
          true
        ) {
          if (this.isCurrTask) {
            this.tasks[this.idx].name = this.taskNew.name.trim();
            this.tasks[this.idx].date = this.taskNew.date;
            this.tasks[this.idx].user = this.taskNew.user.trim();
            this.tasks[this.idx].description = this.taskNew.description.trim();
            this.tasks[this.idx].state = this.taskNew.state;
          } else {
            this.tasks.push(new Task(this.taskNew));

            const i = this.tasks.length - 1;

            let chek = false;
            for (const item of this.users) {
              if (item === this.tasks[i].user) {
                chek = true;
              }
            }

            if (!chek) {
              this.users.push(this.tasks[i].user);
            }
          }
        } else {
          this.isAttentionShow = false;
          this.isAttentionDateShow = true;
          this.isPopItShow = true;
        }
      } else {
        this.isAttentionShow = true;
        this.isAttentionDateShow = false;
        this.isPopItShow = true;
      }
    },

    nullAll() {
      this.taskNew.name = "";
      this.taskNew.date = "";
      this.taskNew.user = "";
      this.taskNew.description = "";
      this.taskNew.state = "";

      this.isCurrTask = false;
    },

    currentTask(i) {
      this.taskNew.name = this.tasks[i].name;
      this.taskNew.date = this.tasks[i].date;
      this.taskNew.user = this.tasks[i].user;
      this.taskNew.description = this.tasks[i].description;
      this.taskNew.state = this.tasks[i].state;

      this.isCurrTask = true;
      this.idx = i;
    },

    deleteTask() {
      this.tasks.splice(this.idx, 1);
    },

    search() {
      const searchValue = this.searchValue.toLowerCase().trim();

      if (searchValue) {
        for (const item of this.tasks) {
          if (item.name.toLowerCase().search(searchValue) == -1) {
            item.isClassShow = false;
          } else {
            item.isClassShow = true;
          }
        }
      } else {
        for (const item of this.tasks) {
          item.isClassShow = true;
        }
      }
    },

    filter() {
      const optionValue = this.optionValue;

      if (optionValue === "Все") {
        for (const item of this.tasks) {
          item.isClassShow = true;
        }
      } else {
        for (const item of this.tasks) {
          if (item.user !== optionValue) {
            item.isClassShow = false;
          } else {
            item.isClassShow = true;
          }
        }
      }
    },
  },

  compute: {},

  watch: {},
};

Vue.createApp(app).mount("#app");
