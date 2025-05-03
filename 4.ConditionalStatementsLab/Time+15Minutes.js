function time15minutes (hour, minutes){
    add15minutes = minutes + 15;
    
    if (add15minutes >= 60){
        hour += 1;
        add15minutes -= 60;
    }
    if (hour > 23){
        hour = 24 - hour
    }
    if (add15minutes < 10){
        console.log(`${hour}:0${add15minutes}`);
    }else{
        console.log(`${hour}:${add15minutes}`);
    }
}
time15minutes(12, 49)
