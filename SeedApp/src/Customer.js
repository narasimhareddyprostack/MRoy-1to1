class Customer {
  id;
  name;
  email;
  mobile;
  constructor(i, n, e, m) {
    this.id = i;
    this.name = n;
    this.email = e;
    this.mobile = m;
  }
  customer_info() {
    console.log(this.id);
  }
}

export default Customer;
//module.exports = Customer;
