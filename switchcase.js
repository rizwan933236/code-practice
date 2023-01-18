function dayNumber(num) {
    switch (num) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid Number"
    }
    return day;
}
console.log(dayNumber(1))
switch (new Date().getDay()) {
    default:
        text = "Looking forward to the Weekend";
        break;
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;
    case 7:
        text = "Sunday";
        break;
    case 4:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
}
console.log(text)