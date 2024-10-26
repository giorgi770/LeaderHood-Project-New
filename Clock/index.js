function updateClock() {
    const now = new Date(); // იღებს მიმდინარე თარიღსა და დროს
    let hours = now.getHours(); // იღებს საათის მნიშვნელობას (0-23)
    const meridiem = hours >= 12 ? "PM" : "AM"; // განსაზღვრავს, AM თუ PM არის

    hours = hours % 12 || 12; // 12-საათიან ფორმატში გადაყვანა (0 -> 12)
    hours = hours.toString().padStart(2, '0'); // 2 სიმბოლოზე ფორმატირება (e.g., 01)
    const minutes = now.getMinutes().toString().padStart(2, '0'); // წუთების ფორმატირება 2 სიმბოლოზე
    const seconds = now.getSeconds().toString().padStart(2, '0'); // წამების ფორმატირება 2 სიმბოლოზე

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`; // საათის სტრიქონად ფორმატირება

    document.getElementById("clock").textContent = timeString; // "clock" ელემენტის ტექსტის განახლება
}

updateClock(); // ერთხელ გაშვება ფუნქციის
setInterval(updateClock, 1000); // ყოველ წამში საათის განახლება
