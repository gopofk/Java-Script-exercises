function movieBudget(budget, statists, clothing){
    let decor = budget * 0.1;
    let totalClothing = clothing * statists;

    if (statists > 150){
        totalClothing -= totalClothing * 0.1;
    }

    let totalCost = decor + totalClothing;

    if (totalCost > budget){

        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`)
    }
    else{
        
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`)
    }
}


