function sumAll(nOne,nTwo){
  let newSum;

  if(nOne>0 && nTwo>0 && Number.isInteger(nOne) && Number.isInteger(nTwo)) {

    //nOne start number (the smaller number)
    if(nOne<nTwo){
        newSum = nTwo * (nTwo + 1) / 2;

        if(nOne>1){
            newSum -= nOne;
        }
        
    }else {
       newSum = nOne * (nOne + 1 ) / 2;

       if(nTwo>1){
        newSum -= nTwo;
    }
    }

  }else
  return 'ERROR'
    return newSum;
}


//i=4
//n=3
//sum = 7
//i=3
//n=2
//sum = 

// Do not edit below this line
module.exports = sumAll;
