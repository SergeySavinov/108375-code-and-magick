function getMessage(variableA, variableB) {
  if (typeof variableA === 'boolean') {
    if (variableA === 'true') {
      return 'Я попал в ' + variableB;
    } else {
      return 'Я никуда не попал';
    }
    
  } else if (typeof variableA === 'number') {
    return 'Я прыгнул на ' + variableA * 100 + ' сантиметров';
    
  } else if (typeof variableA === 'object') {
    var sum = 0;
    for (var i = 0; i < variableA.length; i++) {
      sum += variableA[i];
    }
    return 'Я прошёл ' + sum + ' шагов';
    
  } else if (typeof variableA === 'object' && typeof variableB ==='object') {
    var lengthOfPath = 0;
    for (var i =0; i < variableA.length; i++) {
      length += variableA[i] * variableB[i];
    }
    return 'Я прошёл ' + lengthOfPath + ' метров';
  }
}