/* Build a function that returns an array of integers from n to 1 where n>0. */

const reverseSeq = n => {
    if (n < 1) {
      return [];
    } else {
      const arr = reverseSeq(n-1);
      arr.unshift(n);
      return arr;
    }
  };