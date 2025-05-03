function sumSeconds(a, b, c){
    let totalSeconds = a + b + c;
    let minutes = totalSeconds / 60;
    let roundedMinutes = Math.floor(minutes);
    let seconds = totalSeconds % 60;
    
    if (seconds < 10){
        console.log (`${roundedMinutes}:0${seconds}`);
    }
    else{
        console.log (`${roundedMinutes}:${seconds}`);
    }
}
   
sumSeconds(35, 45, 44)