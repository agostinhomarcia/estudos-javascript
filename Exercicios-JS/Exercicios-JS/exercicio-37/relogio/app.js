const clockContainer = document.querySelector(".clock-container");

const updateClock = () => {
  const present = new Date();

  const hours = present.getHours();
  const minutes = present.getMinutes();
  const seconds = present.getSeconds();

  const clockHTML = `
    <span>${hours}</span>
    <span>${minutes}</span>
    <span>${seconds}</span>
    `;
  clockContainer.innerHTML = clockHTML;
};

setInterval(updateClock, 1000);
