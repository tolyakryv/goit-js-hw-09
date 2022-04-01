import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onCloseFunction(selectedDates[0]);
  },
};

const buttonEl = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const ref = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
console.log(buttonEl, inputEl, ref.days, ref.hours, ref.minutes, ref.seconds);

const flatpic = flatpickr(inputEl, options);
buttonEl.disabled = true;

let changeDate = Date.now();
buttonEl.addEventListener('click', onStartclick);
function onCloseFunction(date) {
  if (date > Date.now()) {
    buttonEl.disabled = false;
    changeDate = date;
  } else {
    alert('Please choose a date in the future');
  }
}
function onStartclick() {
  buttonEl.disabled = true;
  setInterval(() => {
    const restTime = convertMs(changeDate - Date.now());
    changeInput(restTime);
    console.log(changeDate);
  }, 1000);

}


function changeInput({ days, hours, minutes, seconds }) {
  ref.days.textContent = addLeadingZero(days);
  ref.hours.textContent = addLeadingZero(hours);
  ref.minutes.textContent = addLeadingZero(minutes);
  ref.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
