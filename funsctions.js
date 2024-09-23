const paintAndSupplies = function(totalCost, callback) {
    let cost = prompt("Enter the cost of the paint and supplies : ");

    cost = parseFloat(cost);
    if (cost <= 200) {
      if (cost > 100) cost *= 1.1;

      let paintArea = document.querySelector(".paint");

      paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

      callback(totalCost + cost);

      return totalCost + cost;

    } else {
      alert("You can not have an amount more than $200");
    }
  }

   floorCoverings = (totalCost, callback)  => {
    let cost = prompt("Enter the cost of the Floor Coverings : ");

    cost = parseFloat(cost);
    if (cost <= 2000) {
      if (cost < 500) 
          cost =  cost - (cost * .15);

      let floorArea = document.querySelector(".floorCoverings");

      floorArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

      callback(totalCost + cost);

      return totalCost + cost;
    } 
    else {
      alert("You can not have an amount more than $2000");
    }
  }

  function furnitureCost(totalCost, callback) {
    let cost = prompt("Enter the cost of the Furniture : ");

    cost = parseFloat(cost);
    if (cost <= 2000) {
      if (cost < 500) 
          cost =  cost - (cost * .10);

      let furnitureArea = document.querySelector(".furniture");

      furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

      callback(totalCost + cost);

      return totalCost + cost;
    } 
    else {
      alert("You can not have an amount more than $2000");
    }
  }

  const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");

    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
  };

  let totalCost = 0;
  totalCost = paintAndSupplies(totalCost, updateTotals);
  totalCost = floorCoverings(totalCost, updateTotals);
  totalCost = furnitureCost(totalCost, updateTotals);