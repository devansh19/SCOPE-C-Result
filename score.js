function calculatePrognosisScores() {
  let scores = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0
  };

  // Prompt the user for scores and store them in the 'scores' object
  for (let key in scores) {
    scores[key] = parseInt(prompt(`Enter score for ${key}: `));
  }

  // Calculate the total score
  let totalScore = Object.values(scores).reduce((acc, val) => acc + val);

  // Determine the prognosis
  let prognosis = '';
  if (totalScore >= 51) {
    prognosis = 'Better';
  } else if (totalScore >= 34 && totalScore < 51) {
    prognosis = 'Intermediate';
  } else {
    prognosis = 'Worse';
  }

  // Display the total score and prognosis
  console.log(`Total Score: ${totalScore}`);
  console.log(`Prognosis: ${prognosis}`);

  const htmlScore=`
  <div>${totalScore}</div>
 `;
  const htmlPrognosis =`
  <div>${prognosis}</div>
  `;
 scoreHTML = htmlScore;
 prognosisHTML = htmlPrognosis;
  document.querySelector('.js-score').
    innerHTML = scoreHTML;
  document.querySelector('.js-prognosis').
  innerHTML = prognosisHTML; 
}

// Call the function to calculate scores and determine the prognosis

