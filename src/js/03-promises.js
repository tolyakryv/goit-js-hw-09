

const  inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const  inputAmount = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form')


form.addEventListener('submit',onSubmit);
function onSubmit(event) {
event.preventDefault();
const delay = parseInt(inputDelay.value);
const step = parseInt(inputStep.value);
const amount = parseInt(inputAmount.value);
let delayCalc = delay;
for (let i=1; i<=amount; i+=1){
  createPromise(i,delayCalc)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delayCalc += step;
}
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (shouldResolve){
          resolve({position, delay})}
          else{
            reject({position, delay })
          }},delay)

    })
  }
    // Reject


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });