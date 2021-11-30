//Challenge 1
//Print 43llo th3r3 w0rld 3 seconds after file is run
// console.log("Challenge 1")

setTimeout(() => {
  console.log('43llo th3r3 w0rld');
}, 3000);

// Challenge 2
//Instead of printing sentence, have code print each of words one at a time, 1 second apart.
//its okay if words appear on separate line due to console.log. 

setTimeout(() => {
  console.log('43llo');
  setTimeout(() => {
    console.log('th3r3');
    setTimeout(() => {
      console.log('w0rld');
    }, 1000)
  }, 2000)
}, 3000);

//challenge 2 with different format below.
// setTimeout(() => {
//   console.log('43llo');
// }, 4000);
// setTimeout(() => {
//   console.log('th3r3');
// }, 5000);
// setTimeout(() => {
//   console.log('w0rld');
// }, 6000);
