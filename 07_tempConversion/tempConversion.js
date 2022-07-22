function ftoc (ftemp) {
    let newTemp = (ftemp - 32) * 5/9;
    newTemp = Number(newTemp.toFixed(1));
return newTemp;
};

function ctof (ctemp) {
return Math.round(ctemp +32 * 5/9);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
