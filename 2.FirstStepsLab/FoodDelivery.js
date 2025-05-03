function foodDelivery(chickenCount, fishCount, veggyCount){
    let chickenMenu = 10.35 * chickenCount;
    let fishMenu = 12.4 * fishCount;
    let veggyMenu = 8.15 * veggyCount;
    let dessert = (chickenMenu + fishMenu + veggyMenu) * 0.2;

    let totalPrice = chickenMenu + fishMenu + veggyMenu + dessert + 2.5;
    console.log(totalPrice)
}

