class Address {
  constructor(flatNo, street, city, pin) {
    this.flatNo = flatNo;
    this.street = street;
    this.city = city;
    this.pin = pin;
  }
}
//module.exports = Address;
//Es5 syntax
//ES6 Syntax

export default Address;
export { Address}