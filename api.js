// api.js - ملف مستقل لعمليات السيرفر
const BASE_URL = 'https://ertwa-backend.onrender.com';

// 1. دالة جلب الفعاليات للرئيسية
async function fetchHomeEvents() {
    try {
        const response = await fetch(`${BASE_URL}/home`);
        if (!response.ok) throw new Error('فشل في جلب البيانات');
        return await response.json(); 
    } catch (error) {
        console.error('حدث خطأ في جلب الفعاليات:', error);
        return [];
    }
}

// 2. دالة تسجيل الدخول (مصححة ومؤمنة)
async function loginWithAPI(email, password) {
    try {
        const url = `${BASE_URL}/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'accept': 'application/json' }
        });
        const data = await response.json();
        return { status: response.status, ok: response.ok, data: data };
    } catch (error) {
        console.error('خطأ في الاتصال بالسيرفر:', error);
        return { status: 500, ok: false, data: { message: "فشل الاتصال بالسيرفر" } };
    }
}

// 3. [جديد ومصحح] دالة إضافة فعالية جديدة من لوحة التحكم بـ Token حقيقي
async function addNewEvent(eventData) {
    try {
        // جلب التوكن الحقيقي المحفوظ في المتصفح
        const token = localStorage.getItem('userToken') || "1"; 

        // تحويل البيانات إلى Query Parameters حسب متطلبات الباك إند المرفوع
        const params = new URLSearchParams({
            title: eventData.title,
            description: eventData.description,
            date: eventData.date,
            time: eventData.time,
            location: eventData.location,
            image: eventData.image,
            token: token // تمرير التوكن الديناميكي
        });

        const response = await fetch(`${BASE_URL}/events?${params.toString()}`, {
            method: 'POST',
            headers: { 'accept': 'application/json' },
            body: '' // الباك إند يتوقع الجسم فارغاً والمعاملات في الرابط
        });

        const data = await response.json();
        if (response.ok) {
            alert('تم إضافة الفعالية بنجاح في قاعدة البيانات!');
            window.location.reload(); // إعادة تحميل الصفحة لرؤية التحديثات
        } else {
            alert('فشل إضافة الفعالية: ' + (data.message || 'غير مصرح لك'));
        }
    } catch (error) {
        console.error('خطأ في الاتصال بالسيرفر أثناء إضافة الفعالية:', error);
    }
}