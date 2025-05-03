function supplies (pensPack, markersPack, litters, discount){

    let totalPens = pensPack * 5.8;
    let totalMarkersPack = markersPack * 7.2;
    let totalLitters = litters * 1.2;
    let sum = totalLitters + totalMarkersPack + totalPens;

    let discountSum = sum * ( discount / 100);
    let totalSum = sum - discountSum;

    console.log(totalSum);
}
supplies (2,
    3,
    4,
    25)