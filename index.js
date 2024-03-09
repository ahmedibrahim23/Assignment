
let calculateTotalTarget=(startDate,endDate,monthlyRevenue) =>{
    
  if (startDate > endDate) {
    startDate, endDate = endDate, startDate;
  }
  anuall=monthlyRevenue*12;
  console.log(anuall);
  const results = [];

  let currentMonth = startDate.getMonth();
  let currentYear = startDate.getFullYear();

  while (currentYear < endDate.getFullYear() ||
         (currentYear === endDate.getFullYear() && currentMonth <= endDate.getMonth())) {
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let weekdays = (new Date(currentYear, currentMonth, daysInMonth - 1)).getDay();
    let fridaysInMonth = weekdays 
    + (weekdays % 5 >= 4 ? 1 : 0); 

    let daysToEndDate = 0;
    if (currentYear === endDate.getFullYear() && currentMonth === endDate.getMonth()) {
      daysToEndDate = endDate.getDate() - startDate.getDate();
      weekdays = endDate.getDay();
      fridaysInMonth = weekdays 
        + (weekdays % 5 >= 4 ? 1 : 0); 
    }

    let daysExcludingFriday= daysInMonth - fridaysInMonth;
    
    if (daysToEndDate > 0) {
      daysExcludingFriday += daysToEndDate - fridaysInMonth;
    }

    let monthlyExpectedRevenue = monthlyRevenue / daysInMonth*daysExcludingFriday;
    results.push(`month${currentMonth + 1} $${monthlyExpectedRevenue}`);

    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return results;
}


const startDate = new Date(2024, 0, 1); 
const endDate = new Date(2024, 0, 20); 
const monthlyRevenue = 435;

const expectedRevenue = calculateTotalTarget(startDate,endDate,monthlyRevenue);

console.log(expectedRevenue);