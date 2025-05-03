function vacationBooks(totalPages,
pagesPerHour,
daysToRead){

    let totalHours = totalPages / pagesPerHour;
    let hoursPerDay = totalHours / daysToRead;

    console.log (hoursPerDay)
}

vacationBooks(212,20,2)