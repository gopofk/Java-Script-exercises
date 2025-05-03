function swimRecord(currentRecord, mLong, oneMeterTime){
    let slowness = Math.floor(mLong / 15);
    let timesSlowness = 12.5 * slowness;
    let timeIvan = (oneMeterTime * mLong) + timesSlowness;
        if (timeIvan < currentRecord)
        {
            console.log(`Yes, he succeeded! The new world record is ${(timeIvan).toFixed(2)} seconds.`);
        }
        else
        {
            console.log(`No, he failed! He was ${(timeIvan - currentRecord).toFixed(2)} seconds slower.`);
        }
}