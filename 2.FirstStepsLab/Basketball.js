function basketball(yearlyCost){
    let shoes = yearlyCost - (yearlyCost * 0.4);
    let equip = shoes - (shoes * 0.2);
    let ball = equip / 4;
    let accessories = ball / 5;

    let totalCost = yearlyCost + shoes + equip + ball + accessories;

    console.log (totalCost);
}
