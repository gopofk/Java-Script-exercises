function cost(numDog,
    numCat){
        
    let dogFoodprice = 2.5;
    let catFoodprice = 4;
    let dogFoodCost = numDog * dogFoodprice;
    let catFoodCost = numCat * catFoodprice;
    let totalCost = dogFoodCost + catFoodCost;
    console.log(`${totalCost} lv.`)
};

cost(5, 4);