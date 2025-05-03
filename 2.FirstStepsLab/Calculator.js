function sum(deposit,
    months,
    ratePercent){
    
        let totalRate = deposit * (ratePercent / 100);
        let oneMonthRate = totalRate / 12;
        let totalsum = deposit + (months * oneMonthRate)

        console.log (totalsum)
    }
    
sum(200, 3, 5.7);