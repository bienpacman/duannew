class Student {
    constructor(id, name, age,position) {
        this.id = id
        this.name = name
        this.age = age
        this.position = position
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setNam(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
    getPosition() {
        return this.position;
    }
    setPosition(position){
        this.position = position;
    }
}