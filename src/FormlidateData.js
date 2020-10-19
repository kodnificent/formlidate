export default class {
  constructor(form) {
    this.data = {};

    const data = new FormData(form);

    data.forEach((value, key) => {
      this.data[key] = this.data[key] ?? [];
      this.data[key].push(value);
    });
  }

  get(key) {
    return this.data[key]?.[0];
  }

  getAll(key) {
    return this.data[key];
  }
}
