function bonusPoints(a){
    let addBonus = 0.0;
    
    if (a <= 100){
        addBonus = 5;
    }
    else if (a > 100 && a <= 1000){
        addBonus = a * 0.2;
    }
    else if (a > 1000){
        addBonus = a * 0.1;
    }



    if (a % 2 === 0){
        addBonus += 1;
    }
    else if (a % 10 === 5){
        addBonus += 2;
    }

    let endNumber = a + addBonus;

    console.log(addBonus);
    console.log(endNumber);
}
bonusPoints(15875);