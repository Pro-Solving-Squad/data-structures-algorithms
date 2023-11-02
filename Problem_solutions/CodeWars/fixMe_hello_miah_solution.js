class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.order = [];
    this.obj = {};
  }

  setAge(age) {
    this.age = age;
    if (!this.order.includes("age")) this.order.push("age");
    this.obj.age = ` I am ${this.age}.`;
    return this;
  }

  setSex(sex) {
    this.sex = sex;
    if (!this.order.includes("sex")) this.order.push("sex");
    this.obj.sex = ` I am ${this.sex == "M" ? "male" : "female"}.`;
    return this;
  }

  setName(name) {
    this.name = name;
    if (!this.order.includes("name")) this.order.push("name");
    this.obj.name = ` My name is ${this.name}.`;
    return this;
  }

  hello() {
    this.str = "Hello.";

    for (let i = 0; i < this.order.length; i++) {
      this.str += this.obj[this.order[i]];
    }

    return this.str;
  }
}
