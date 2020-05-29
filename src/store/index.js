const setters = {
  tasks: {},
};

const privateStore = {
  tasks: JSON.parse(localStorage.data_task || '[]')
};

const store = {
  get tasks() { return  privateStore.tasks },
  set tasks(val) {
    privateStore.tasks = val;
    localStorage.data_task = JSON.stringify(store.tasks);
    Object.keys(setters.tasks).forEach(key => {
      setters.tasks[key]();
    });
  }
};

export { setters, store };
