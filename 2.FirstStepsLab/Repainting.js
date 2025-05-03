function repainting(sqm, paint, thinner, hours){
    let nailonSqm = 1.5 * (sqm + 2);
    let paintLitter = 14.5 * (paint + (paint / 10));
    let paintThinner = 5 * thinner;

    let priceMats = nailonSqm + paintLitter + paintThinner + 0.4;
    let priceHours = (priceMats * 0.3) * hours;

    console.log (priceHours + priceMats);
}
