//const Address=require("./address");
import Address from "./address";

class Cusomter {
  constructor(id, name, emial, mobile, address) {
    this.id = id;
    this.name = name;
    this.emial = emial;
    this.mobile = mobile;
    this.address = address;
  }
  getCusomterInfo() {
    console.log(this.id, this.name, this.address);
  }
}

let c1 = new Cusomter(
  101,
  "Narasimha",
  "greetlabs@gmail.com",
  9591,
  new Address("#5", "Kalamandir Opp", "Bangalore", 523245)
);

let c2 = new Cusomter(
  102,
  "Ramehs",
  "Reamehs@gmail.com",
  9591,
  new Address("#6", "Kalamandir Opp", "Bangalore", 523245)
);
c1.getCusomterInfo();

c2.getCusomterInfo();
