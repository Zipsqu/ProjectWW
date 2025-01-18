// Function to update the current time
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = time;
}

// Function to check if the cafe is open based on current time
function checkCafeStatus() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();

    const hours = [
        { day: 0, open: 9, close: 16, openMinute: 0, closeMinute: 30 }, // Sunday
        { day: 1, open: 8, close: 16, openMinute: 0, closeMinute: 30 }, // Monday
        { day: 2, open: 8, close: 16, openMinute: 0, closeMinute: 30 }, // Tuesday
        { day: 3, open: 8, close: 16, openMinute: 0, closeMinute: 30 }, // Wednesday
        { day: 4, open: 8, close: 16, openMinute: 0, closeMinute: 30 }, // Thursday
        { day: 5, open: 8, close: 16, openMinute: 0, closeMinute: 30 }, // Friday
        { day: 6, open: 9, close: 16, openMinute: 0, closeMinute: 30 }, // Saturday
    ];

    const todayHours = hours.find(day => day.day === dayOfWeek);
    const isOpen = (hour > todayHours.open || (hour === todayHours.open && minute >= todayHours.openMinute)) &&
                   (hour < todayHours.close || (hour === todayHours.close && minute <= todayHours.closeMinute));

    const statusMessage = isOpen ? "We are Open!" : "Sorry, we're Closed.";
    document.getElementById("status-message").textContent = statusMessage;
}

// Initializing the clock and status
setInterval(updateClock, 1000); // Updates every second
checkCafeStatus(); // Check once when page loads
