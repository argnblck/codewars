var countSheep = function (num){
    let murmur = "";
    if (num < 1) {
      return murmur;
    } else {
      for (let i = 1; i <= num; i++) {
        murmur += `${i} sheep...`;
      }
      return murmur;
    }
  }