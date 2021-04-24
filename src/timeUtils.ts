const prefixUnit = (unit: number) => (unit < 10 ? `0${unit}` : unit);

export function generateCountdown() {
  const duration = Date.parse("27 May 2021 16:00:00 MST") - Date.now();
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  return (
    days +
    ":" +
    prefixUnit(hours) +
    ":" +
    prefixUnit(minutes) +
    ":" +
    prefixUnit(seconds)
  );
}
