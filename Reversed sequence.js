const reverseSeq = n => {
    if (n < 1) {
      return [];
    } else {
      const arr = reverseSeq(n-1);
      arr.unshift(n);
      return arr;
    }
  };