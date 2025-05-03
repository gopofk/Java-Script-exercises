function shopping(budget, videoCardsCount, processorsCount, ramStorageCount){
    let videoCardPrice = 250 * videoCardsCount;
    let processorsPrice = processorsCount * (videoCardPrice * 0.35);
    let ramStoragePrice = ramStorageCount * (videoCardPrice * 0.1);
    let totalCost = videoCardPrice + processorsPrice + ramStoragePrice;

    if(videoCardsCount > processorsCount){
        totalCost -= totalCost * 0.15
    }

    if(budget >= totalCost){
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    }
    else{
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`);
    }
}