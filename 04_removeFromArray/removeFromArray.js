function removeFromArray(arry,...ele) {
    let n = ele.length;
    while (n>=0){

        for (i = arry.length; i>=0; i--) {
            if (arry[i] === ele[n]) {
                arry.splice(i,1);
                
            }
        }
        n--;
    }
    
    return arry;
};

// Do not edit below this line
module.exports = removeFromArray;
