function greening(sqm){
    let sqmPrice = sqm * 7.61;
    let discount = sqmPrice * 0.18;

    console.log (`The final price is: ${sqmPrice - discount} lv.`)
    console.log (`The discount is: ${discount} lv.`)
}
greening(550);