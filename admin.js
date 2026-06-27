// admin.js - مخصص لصفحة لوحة التحكم فقط

window.onload = function() {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert('غير مصرح لك بدخول هذه الصفحة، يرجى تسجيل الدخول أولاً.');
        window.location.href = 'login.html'; 
        return;
    }
};

const addEventForm = document.getElementById('add-event-form');
if (addEventForm) {
    addEventForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const eventData = {
            title: document.getElementById('event-title').value,
            description: document.getElementById('event-desc').value,
            date: document.getElementById('event-date').value,
            time: document.getElementById('event-time').value,
            location: document.getElementById('event-loc').value,
            image: document.getElementById('event-img').value
        };

        // استدعاء الدالة المحدثة من ملف api.js
        await addNewEvent(eventData); 
    });
}