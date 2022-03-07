var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthDate.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            // if (new Date().getTime() < value.getTime()) {
            //   throw new Error('A data de aniversario não pode ser uma data futura');
            // }
            if (this.age > 120)
                throw new Error('A pessoa não pode ter mais de 120 anos');
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.validateName = function (value) {
        if (value.length < 3)
            throw new Error('O nome deve ter ao menos três caracteres');
    };
    return Person;
}());
var birthDate1 = new Date('1900-05-13');
var person1 = new Person('Ju', birthDate1);
console.log(person1);
