import { time_left } from "../utils/domElements.mjs";

function timeLeft(endDate) {
  console.log(endDate);

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = new Date(endDate).getTime() - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      time_left.innerHTML = "Expired";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      time_left.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

export { timeLeft };
