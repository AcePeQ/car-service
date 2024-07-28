export default function getDate() {
  const date = new Date();
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const offset = 2;
  const poland = utc + 3600000 * offset;
  const polandTimeNow = new Date(poland);

  const hour = polandTimeNow.getHours();
  const day = polandTimeNow.getDay();

  let isOpen = true;

  if (day >= 1 && day <= 5) {
    if (hour >= 7 && hour <= 21) {
      isOpen = true;
    } else {
      isOpen = false;
    }
  } else if (day === 6) {
    if (hour >= 8 && hour <= 17) {
      isOpen = true;
    } else {
      isOpen = false;
    }
  } else {
    isOpen = false;
  }

  return isOpen;
}
