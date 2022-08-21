// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(role = 'go to the office'){
    return `This Monday, I will ${role}.`
}

function wrapAdjective(style = '*'){
    return function(string = 'special'){
        return `You are ${style}${string}${style}!`
    }
}