import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
console.log(delay < 0)
if((delay < 0)||(step <0)||(amount < 0)){
  Notify.warning('all input must be more 0');
}else{
let accDelay = delay;
for (let i=1; i<=amount; i+=1){
  createPromise(i,accDelay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  accDelay += step;}
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