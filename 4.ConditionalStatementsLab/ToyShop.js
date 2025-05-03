function toyShop(vacPrice, puzzleCount, dolls, teddys, minions, truks){
    
    let puzzlePrice = 2.6 * puzzleCount;
    let dollsPrice = 3 * dolls;
    let teddyPrice = 4.1 * teddys;
    let minionPrie = 8.2 * minions;
    let trukPrice = 2 * truks;
    let totalPrice = puzzlePrice + dollsPrice + teddyPrice + minionPrie + trukPrice;
    let totalToysCount = puzzleCount + dolls + teddys + minions + truks;
    
    if (totalToysCount >= 50){
        totalPrice -= totalPrice * 0.25;
    }

    totalPrice -= totalPrice * 0.1;

    if (vacPrice <= totalPrice){
        console.log (`Yes! ${(totalPrice - vacPrice).toFixed(2)} lv left.`);
    }
    else {
        console.log (`Not enough money! ${(vacPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}
toyShop(320,

    8,
    
    2,
    
    5,
    
    5,
    
    1)