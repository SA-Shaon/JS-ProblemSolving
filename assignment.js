function kilometerToMeter(kilometer){
    if(kilometer >= 0){
     var meter = kilometer * 1000;
     return meter;
 }
     else{
         return 'Distance cannot be negative.';
     }
}
 
 


function budgetCalculator(watch,phone,laptop){
    if(watch>= 0 && phone>= 0 && laptop>= 0){
         var sum = (watch * 50)+ (phone * 100)+(laptop * 500);
         return sum;
         }
     else {
         return ' cannot be negative.';
     }    
}



function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100; 
        return cost;
    }
    else if(day <= 20){
        var remain = day - 10;
        cost = 1000 + remain * 80;
        return cost;
    }
    else{
        var remain = day - 20;
        cost = 1800 + remain * 50;
        return cost;
    }
}

