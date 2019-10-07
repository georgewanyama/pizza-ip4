 
//Business Logic
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
Pizza.prototype.veggieOptions = function (topping) {
  this.veggieToppings.push(topping);
}
Pizza.prototype.Price = function() {
  var cost = 0
  if (this.sizes === "Small") {
    cost += 8.25
  } else if (this.sizes === "Medium") {
    cost += 11.50
  } else if (this.sizes === "Large") {
    cost += 14.25
  } else if (this.sizes === "Xlarge") {
    cost += 17.25
  }
  if (this.base === "Tomato") {
    cost += 0
  } else if (this.base === "Garlic") {
    cost += 1
  } else if (this.base === "Pesto") {
    cost += 1.50
  } else if (this.base === "Olive-Oil") {
    cost += 2
  }
  this.meatToppings.forEach(function(){
    cost += 4
  });
  this.veggieToppings.forEach(function(){
    cost += 2
  });

    this.total += cost
  return this.total
}
Pizza.prototype.Receipt = function () {
  return "Thank You for your order. We see that you have ordered" + " a " + this.sizes + " pizza with " +  this.base + " and " + this.meatToppings + " " + this.veggieToppings + " your order will be ready shortly!"
}
//UI Logic
$(function(){
  $("#pizzaorder").submit(function(event){
    

    var inputtedName = $("#name").val();
    var inputtedSizes = $("input:radio[name=sizes]:checked").val();
    var inputtedBase = $("input:radio[name=base]:checked").val();

    var newCost = new Pizza(inputtedSizes, inputtedBase);
    var inputtedMeatTopping = $("input:checkbox[name=topping]:checked").each(function(){
      newCost.toppingOptions($(this).val());
    });var inputtedVeggieTopping = $("input:checkbox[name=veggies]:checked").each(function(){
      newCost.veggieOptions($(this).val());
    });
    var totalprice = newCost.Price();

      $(".col-md-12").show();
      $("#output").text("$ " + totalprice);
      $("#receipt").text(newCost.Receipt());
  });

  event.preventDefault();
})