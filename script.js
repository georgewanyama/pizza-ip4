function Pizza(size, base) {
    this.sizes = size;
    this.base = base;
    this.meatToppings = [];
    this.veggieToppings = [];
    this.total = [];
  }
  Pizza.prototype.toppingOptions = function(topping) {
    this.meatToppings.push(topping);
  }
  
