function fishTank(length, width, height, percent){

    let sqcm = length * width * height;
    let litters = sqcm * 0.001;
    percent = percent / 100;
    let totalLitters = litters * (1 - percent)

    console.log(totalLitters)
}