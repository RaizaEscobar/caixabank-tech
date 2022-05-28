exports.getLastMonthTransactions = () => {
    return 35;
}

exports.getTodayTransactions = () => {
    return 3;
}

exports.getConversion = () => {
    return [
        {
            name:"phone",
            value: 3000,
            background: '#9013FE'
        },
        {
            name:"Screens",
            value: 2652,
            background: '#007AFF'   
        },
        {
            name:"PCs",
            value: 500,
            background: '#FB8832'
        },
        {
            name:"Other",
            value: 2500,
            background: '#E6E5E6'
        }];
}

exports.getWeek = (weekNumber) => {
    const expenses = getExpenses();
    return expenses.slice(5*(weekNumber-1), 5*weekNumber);
}

function getExpenses() {
    return [
        {day:"Mon",date:"06/04/2022",amount:273331},
        {day:"Tue",date:"07/04/2022",amount:223340},
        {day:"Wed",date:"08/04/2022",amount:175189},
        {day:"Thu",date:"11/04/2022",amount:167801},
        {day:"Fri",date:"12/04/2022",amount:194796},
        {day:"Mon",date:"13/04/2022",amount:161724},
        {day:"Tue",date:"14/04/2022",amount:172576},
        {day:"Wed",date:"19/04/2022",amount:157017},
        {day:"Thu",date:"20/04/2022",amount:188717},
        {day:"Fri",date:"21/04/2022",amount:208123},
        {day:"Mon",date:"22/04/2022",amount:220990},
        {day:"Tue",date:"25/04/2022",amount:189832},
        {day:"Wed",date:"26/04/2022",amount:321479},
        {day:"Thu",date:"27/04/2022",amount:243349},
        {day:"Fri",date:"28/04/2022",amount:234735}]
}
