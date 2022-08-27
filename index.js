// Your code here
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(records){
    const employeeRecords = []
    records.forEach(record => {
        const emploee = createEmployeeRecord(record)
        employeeRecords.push(emploee)
    });
    return employeeRecords; 
}
function createTimeInEvent(employeeRecord, timeString){
    const dateTime = timeString.split(' ')
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateTime[1]),
        date: dateTime[0],
    })
    return employeeRecord

}
function createTimeOutEvent(employeeRecord, timeString){
    const dateTime = timeString.split(' ')
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateTime[1]),
        date: dateTime[0],
    })
    return employeeRecord

}
function hoursWorkedOnDate(employeeRecord, dateString){
    const inObj = employeeRecord.timeInEvents.find(element => element.date === dateString)
    const outObj = employeeRecord.timeOutEvents.find(element => element.date === dateString)
    return (outObj.hour - inObj.hour) / 100

}
function wagesEarnedOnDate(employeeRecord, dateString){
    const inObj = employeeRecord.timeInEvents.find(element => element.date === dateString)
    const outObj = employeeRecord.timeOutEvents.find(element => element.date === dateString)
    return (outObj.hour - inObj.hour) / 100 * employeeRecord.payPerHour

}
function allWagesFor(employeeRecord){
    const totalDays = employeeRecord.timeInEvents.length
    let sum = 0
    for (let i = 0; i < totalDays; i++ ){
      const totalHours = (employeeRecord.timeOutEvents[i].hour - employeeRecord.timeInEvents[i].hour)/100
      sum = sum + (totalHours) * employeeRecord.payPerHour
    }
  return sum

}
function calculatePayroll(emploeeRecordArr){
    let sum = 0
    for (let i = 0; i < emploeeRecordArr.length; i++){
      sum = sum + allWagesFor(emploeeRecordArr[i])
    }
    return sum 
  }
