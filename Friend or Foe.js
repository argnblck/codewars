function friend(friends) {
    const friendOfYours = [];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length === 4) {
        friendOfYours.push(friends[i]);
      }
    }
    return friendOfYours;
  }