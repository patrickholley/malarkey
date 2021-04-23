export function generateCountdown() {
  const duration = Date.parse("27 May 2021 16:00:00 MST") - Date.now();
  const milliseconds = duration % 1000;
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  const hoursString = hours < 10 ? `0${hours}` : hours;
  const minutesString = minutes < 10 ? "0" + minutes : minutes;
  const secondsString = seconds < 10 ? "0" + seconds : seconds;
  let millisecondsString = milliseconds.toString();
  if (milliseconds < 10) {
    millisecondsString = "00" + milliseconds;
  } else if (milliseconds < 100) {
    millisecondsString = "0" + milliseconds;
  }

  return (
    days +
    ":" +
    hoursString +
    ":" +
    minutesString +
    ":" +
    secondsString +
    "." +
    millisecondsString
  );
}
