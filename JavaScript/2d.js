obj = {
  name: "Narasimha",
  emp: {
    x: () => {
      console.log(this);
    },
    y: function () {
      console.log(this);
    },
  },
};
obj.emp.x();
obj.emp.y();