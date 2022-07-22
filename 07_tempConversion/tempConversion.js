function ftoc (ftemp) {
    let newTemp = (ftemp - 32) * 5/9;
    newTemp = Number(newTemp.toFixed(1));
return newTemp;
};

function ctof (ctemp) {
let newTemp = ctemp * 9/5 + 32;
    newTemp = Number(newTemp.toFixed(1));
return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
