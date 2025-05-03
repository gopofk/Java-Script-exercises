function lunchBreak(movie, episode, lunchbreak){
    let lunch = (lunchbreak / 8);
    let chill = (lunchbreak / 4);
    let freetime = lunchbreak - (lunch + chill);

    if (freetime >= episode){
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(freetime - episode)} minutes free time.`)
    }
    else{
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(episode - freetime)} more minutes.`)
    }
}
