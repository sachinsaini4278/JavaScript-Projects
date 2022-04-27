let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("calculateBtn").addEventListener("click",()=>{
    if(dob.value=="" || currentDate.value==""){
        output.innerHTML = "Please select Date";
    }else{
        calculateAgeDifference(dob.value,currentDate.value);
    }
    
});

function calculateAgeDifference(start,end){
    console.log(start);
    let dobYear = parseInt(start.substring(0,4), 10); //Base 10  
    let dobMonth = parseInt(start.substring(5,7), 10);  
    let dobDate = parseInt(start.substring(8,10), 10); 
    let currYear = parseInt(end.substring(0,4), 10); //Base 10  
    let currMonth = parseInt(end.substring(5,7), 10);  
    let currDate = parseInt(end.substring(8,10), 10); 
    
    //year difference
    let yearAgeDiff = currYear - dobYear;

    //month difference
    let monthAgeDiff;
    if(currMonth >= dobMonth){
        monthAgeDiff = currMonth - dobMonth;
    }
    else{
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - dobMonth;
    }

    //days difference
    let dateAgeDiff;
    if(currDate>=dobDate){
        dateAgeDiff = currDate - dobDate;
    }
    else{
        monthAgeDiff--;
        noOfDaysInDOB = daysInMonth(dobMonth,dobYear);
        dateAgeDiff = noOfDaysInDOB + currDate - dobDate;

        //case when monthAgeDiff goes negative
        if(monthAgeDiff<0){
            monthAgeDiff=11;
            yearAgeDiff--;
        }
    }

    output.innerHTML = yearAgeDiff  + " Years, " + monthAgeDiff + " Months, " + dateAgeDiff + " Days.";
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
