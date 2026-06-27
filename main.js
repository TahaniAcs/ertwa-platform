document.addEventListener('DOMContentLoaded', async function() {
    const token = localStorage.getItem('userToken');
    const role = localStorage.getItem('userRole');

    // إذا لم يكن هناك توكن، نعيده لصفحة تسجيل الدخول فوراً
    if (!token && window.location.href.includes('dashboard.html')) {
        window.location.href = 'login.html';
        return;
    }

    // الإمساك بعناصر الواجهة
    const adminSec = document.getElementById('admin-shortcut-section');
    const memberSec = document.getElementById('member-card-section');
    const courseSec = document.getElementById('my-courses-section');
    const requestSec = document.getElementById('my-requests-section');
    const roleTitle = document.getElementById('user-role-title');

    if (roleTitle) {
        if (role === "admin") {
            // 🎯 هنا التحكم الخاص بالآدمن: تسمح له برؤية وإدارة كل شيء
            if(adminSec) adminSec.style.display = "block";   // فتح كرت تحديث الأقسام واللجان
            if(memberSec) memberSec.style.display = "block"; // فتح كرت رؤية العضوية الشخصية الخاصة به
            
            // إخفاء كروت المستفيدين العاديين لأن الآدمن يدير النظام
            if(courseSec) courseSec.style.display = "none";
            if(requestSec) requestSec.style.display = "none";
            
            roleTitle.textContent = "مدير المنصة العام (Admin)";
        } 
        else if (role === "member") {
            if(adminSec) adminSec.style.display = "none";
            if(memberSec) memberSec.style.display = "block"; // العضو يرى عضويته فقط
            if(courseSec) courseSec.style.display = "none";
            if(requestSec) requestSec.style.display = "none";
            roleTitle.textContent = "عضو معتمد في لجان ارتواء";
        } 
        else {
            // المستفيد العادي والعميل طالب الخدمة
            if(adminSec) adminSec.style.display = "none";
            if(memberSec) memberSec.style.display = "none"; 
            if(courseSec) courseSec.style.display = "block";
            if(requestSec) requestSec.style.display = "block";
            roleTitle.textContent = "مستفيد من الخدمات والأنشطة الرقمية";
            
            fetchUserEvents(token);
        }
    }
});

// دالة جلب الفعاليات الحية للمستفيد من قاعدة البيانات
async function fetchUserEvents(token) {
    try {
        const response = await fetch(`https://ertwa-backend.onrender.com/my_events?token=${token}`);
        if(response.ok) {
            const events = await response.json();
            const listContainer = document.getElementById('courses-list');
            if (!listContainer) return;

            if (events.length === 0) {
                listContainer.innerHTML = "<li><i class='fa-solid fa-info' style='margin-left:8px;'></i>لا توجد فعاليات مسجلة حالياً</li>";
                return;
            }
            listContainer.innerHTML = ""; 
            events.forEach(ev => {
                listContainer.innerHTML += `<li><i class='fa-solid fa-check' style='color: var(--jungle-green); margin-left: 8px;'></i> ${ev.title}</li>`;
            });
        }
    } catch (err) {
        console.error("خطأ في جلب فعاليات المستخدم المعين:", err);
    }
}