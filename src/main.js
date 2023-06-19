import "./index.css";

("use strict");

const HOURS = 1000 * 60 * 60;
const MINUTES = 1000 * 60;
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const todaysDate = new Date();
const timeToAdd = 9 * 24 * HOURS;
// 9 days from current date
const timerEndDate = new Date(
    todaysDate.getTime() + timeToAdd
);
const updateTimer = () => {
    const currentTime = new Date().getTime();
    const difference = timerEndDate.getTime() - currentTime;
    const remainingDays = Math.floor(
        difference / (HOURS * 24)
    );
    const remainingHours = Math.floor(
        (difference % (HOURS * 24)) / HOURS
    );
    const remainingMinutes = Math.floor(
        (difference % HOURS) / MINUTES
    );
    const remainingSeconds = Math.floor(
        (difference % MINUTES) / 1000
    );
    const formattedDays =
        remainingDays < 10
            ? `0${remainingDays}`
            : `${remainingDays}`;
    const formattedHours =
        remainingHours < 10
            ? `0${remainingHours}`
            : `${remainingHours}`;
    const formattedMinutes =
        remainingMinutes < 10
            ? `0${remainingMinutes}`
            : `${remainingMinutes}`;
    const formattedSeconds =
        remainingSeconds < 10
            ? `0${remainingSeconds}`
            : `${remainingSeconds}`;
    daysElement.innerText = formattedDays;
    hoursElement.innerText = formattedHours;
    minutesElement.innerText = formattedMinutes;
    secondsElement.innerText = formattedSeconds;
};
updateTimer();
setInterval(updateTimer, 1000);

const btnMobileMenu =
    document.getElementById("btnMobileMenu");
const mobileMenu = document.getElementById("mobileMenu");

const faqs = document.getElementById("faq").children;
console.log(faq);

window.onload = () => {
    new Glide(".glide", {
        type: "carousel",
        autoplay: 2000,
        perView: 3,
        breakpoints: {
            1024: {
                perView: 2,
            },
            600: {
                perView: 1,
            },
        },
    }).mount();
    mobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
    btnMobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
    for (const faq of faqs) {
        faq.addEventListener("click", (e) => {
            const p = faq.getElementsByTagName("p")[0];
            for (const nfaq of faqs) {
                if (
                    nfaq.getElementsByTagName("p")[0] !== p
                ) {
                    nfaq.getElementsByTagName(
                        "p"
                    )[0].classList.add("hidden");
                }
            }
            p.classList.toggle("hidden");
        });
    }
};
