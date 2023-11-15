function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInRange(1, 4));

/**
 1) Math.floor 
 2) Math.random() 
 3) random * (max - min + 1) + min) 
 */
