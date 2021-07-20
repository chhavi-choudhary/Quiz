let points = 0;

function australia(userAnswer) {
  // what is the capital of australia?
  // 100 pts
  const isCorrect = userAnswer === 'Canberra';
  
  if (isCorrect) {
    points += 100; 
  }
  return isCorrect;
}