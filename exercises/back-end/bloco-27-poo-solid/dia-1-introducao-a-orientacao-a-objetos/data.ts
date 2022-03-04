class Data {
  private _day: number;

  private _month: number;

  private _year: number;

  constructor(day: number, month:number, year: number) {
    const dateString = `${year}-${month}-${day}`;
    if (new Date(dateString).getDate() !== day) {
      day = 1;
      month = 1;
      year = 1900;
    }
    this._day = day;
    this._month = month;
    this._year = year;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  getMonthName(): string {
    const date = new Date(`${this._year}-${this._month}-${this._day}`);
    return date.toLocaleString('pt-BR', { month: 'long' });
  }

  isLeapYear(): boolean {
    if ((this._year % 4 === 0 && this._year % 100 !== 0) || this._year % 400 === 0) {
      return true;
    }
    return false;
  }

  compare(date: Data): number {
    const { _year, _month, _day } = date;
    const currentDate = new Date(`${this._year}-${this._month}-${this._day}`);
    const newDate = new Date(`${_year}-${_month}-${_day}`);
    if (currentDate > newDate) return 1;
    if (currentDate < newDate) return -1;
    return 0;
  }

  format(value: string): string {
    const conditions = [
      (!value.match(/a{2,4}/g)),
      (!value.match(/m{2}/g) && !value.match(/M{1}/g)),
      (!value.match(/d{2}/g)),
    ];

    if (conditions.every((condition) => condition)) {
      throw new Error(`O formato passado é inválido: ${value}`);
    }

    const day = this._day > 9 ? this._day.toString() : `0${this._day.toString()}`;
    const month = this._month > 9 ? this._month.toString() : `0${this._month.toString()}`;
    const year = this._year.toString();

    const dateFormated = value
      .replace('dd', day)
      .replace('mm', month)
      .replace('aaaa', year)
      .replace('aa', year.substring(2))
      .replace('M', this.getMonthName());

    return dateFormated;
  }
}

const date = new Data(4, 3, 2022);
const otherDate = new Data(4, 3, 2022);
console.log(date.format('dd de M de aa'));
