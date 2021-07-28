/* Your Code Here */
function createEmployeeRecord(src){
    let record = {
        firstName: src[0],
        familyName: src[1],
        title: src[2],
        payPerHour: src[3],
        timeInEvents: [],
        timeOutEvents:[]
    }
    return record;
}

function createEmployeeRecords(src){
    return src.map(a => createEmployeeRecord(a))
}

function createTimeInEvent(date){
    let hourDate = date.split(' ');
    let newEvent = {
        type: "TimeIn",
        hour: parseInt(hourDate[1]),
        date: hourDate[0]
    }
    this.timeInEvents.push(newEvent)
    return this;
}

function createTimeOutEvent(date){
    let hourDate = date.split(' ');
    let newEvent = {
        type: "TimeOut",
        hour: parseInt(hourDate[1]),
        date: hourDate[0]
    }
    this.timeOutEvents.push(newEvent)
    return this;
}

function hoursWorkedOnDate(date){
   let matchTimeIn = this.timeInEvents.find( e => e.date === date);
   let matchTimeOut = this.timeOutEvents.find( e => e.date === date);
   return  (matchTimeOut.hour - matchTimeIn.hour)/100;
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}


let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}