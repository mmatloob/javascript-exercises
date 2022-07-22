function repeatString(string,num) {
    let hold ="";
    if (num>=0 ){

        while (num > 0) {
            hold = hold + string;
            num--;
        }
    }else {
        return 'ERROR';
    }
   
    return hold;
}



// const repeatString = function(string,num) {
//    let repeat = "";
//    while (num >= 0 ) {
//        repeat =+ string;
//        num--;
//    }

// };

// Do not edit below this line
module.exports = repeatString;
