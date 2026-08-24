const initialEvents = [
  {
    id: 1,
    title: "Modern JavaScript & ES6+ Workshop",
    category: "Tech",
    speaker: "Dr. Somchai Dev",
    date: "2026-09-15",
    seats: 5,
    description: "เจาะลึกการใช้งาน JavaScript ยุคใหม่ อธิบายเรื่อง Async/Await, Closure และ Modules",
    isRegistered: false
  },
  {
    id: 2,
    title: "UX/UI Design System Creation",
    category: "Design",
    speaker: "Aj. Ananya Design",
    date: "2026-09-20",
    seats: 0,
    description: "การสร้าง Design System สำหรับองค์กรขนาดใหญ่ด้วย Figma และการเชื่อมต่อกับ CSS",
    isRegistered: false
  },
  {
    id: 3,
    title: "Startup Pitching & Funding 101",
    category: "Business",
    speaker: "Khun Vorapat VC",
    date: "2026-09-25",
    seats: 12,
    description: "เทคนิคการนำเสนอแผนธุรกิจเพื่อระดมทุนสำหรับนักศึกษาสายเทคโนโลยี",
    isRegistered: false
  },
  {
    id: 4,
    title: "Cybersecurity Essentials for Web Apps",
    category: "Tech",
    speaker: "Dr. Prasit Security",
    date: "2026-10-01",
    seats: 8,
    description: "เรียนรู้ช่องโหว่พื้นฐาน OWASP Top 10 และแนวทางการป้องกันบน Web Front-end",
    isRegistered: false
  }
];

let events = [];

function initApp() {
    const savedData = localStorage.getItem("smartEventsData");
    if (savedData) {
        events = JSON.parse(savedData);
    } else {
        events = [...initialEvents];
    }
    
    updateOverview();
    searchEvent();
}

function searchEvent(e) {
    if (e) e.preventDefault();

    const searchInput = document.getElementById('search-keyword');
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    const typeSelect = document.getElementById('filter-category');
    const selectedCategory = typeSelect ? typeSelect.value.toLowerCase() : 'all';

    const sortSelect = document.getElementById('sort-order');
    const sortBy = sortSelect ? sortSelect.value : 'date-asc';

    const searchResult = events.filter(event => {
        const matchEvent = event.title.toLowerCase().includes(keyword) ||
                            event.speaker.toLowerCase().includes(keyword);
        
        const eventCategory = event.category.toLowerCase();
        const matchesCategory = selectedCategory === 'all' || eventCategory === selectedCategory;
        
        return matchEvent && matchesCategory;
    });

    searchResult.sort((a, b) => {
        if (sortBy === "date-asc") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortBy === "date-desc") {
            return new Date(b.date) - new Date(a.date);
        }
    });

    const eventContainer = document.getElementById('eventContainer');
    eventContainer.innerHTML = '';

    if (searchResult.length === 0) {
        eventContainer.innerHTML = '<p>ไม่พบกิจกรรมที่ค้นหา</p>';
    } else {
        searchResult.forEach(event => {
            const card = document.createElement('div');
            card.className = 'card';
            
            const isDisabled = event.isRegistered || event.seats <= 0;
            const btnText = event.isRegistered ? 'ลงทะเบียนเรียบร้อยแล้ว' : (event.seats <= 0 ? 'ที่นั่งเต็ม' : `ลงทะเบียน (เหลือ ${event.seats})`);

            card.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>ประเภท:</strong> ${event.category}</p>
                <p><strong>วิทยากร:</strong> ${event.speaker}</p>
                <p><strong>วันที่:</strong> ${event.date}</p>
                <button type="button" 
                        class="btn-register btn-${event.id}" 
                        onclick="registerEvent(${event.id}, this)"
                        ${isDisabled ? 'disabled' : ''}>
                    ${btnText}
                </button>
            `;  
            eventContainer.appendChild(card);
        });
    }
}

function registerEvent(eventId, btnElement) {
    const targetEvent = events.find(event => event.id === eventId);
    
    if (targetEvent && targetEvent.seats > 0 && !targetEvent.isRegistered) {
        targetEvent.seats -= 1;
        targetEvent.isRegistered = true;

        if (btnElement) {
            btnElement.innerText = 'ลงทะเบียนเรียบร้อยแล้ว';
            btnElement.disabled = true;
        }

        localStorage.setItem("smartEventsData", JSON.stringify(events));
        updateOverview();
        searchEvent();
    }
}

function updateOverview() {
    const totalEvents = events.length;
    const registeredCount = events.filter(e => e.isRegistered).length;
    const totalSeats = events.reduce((sum, e) => sum + e.seats, 0);

    const aside = document.querySelector('main aside');
    if (aside) {
        aside.innerHTML = `
            <h2> <img src="https://cdn-icons-png.flaticon.com/128/2567/2567943.png" alt="stat">สถิติภาพรวม</h2>
            <p>กิจกรรมทั้งหมด: ${totalEvents}</p>
            <p>ลงทะเบียนแล้ว: ${registeredCount}</p>
            <p>ที่นั่งว่างรวม: ${totalSeats}</p>
        `;
    }
}

function resetData() {
    localStorage.removeItem("smartEventsData");
    events = JSON.parse(JSON.stringify(initialEvents));

    const searchInput = document.getElementById("search-keyword");
    const categorySelect = document.getElementById("filter-category");
    const sortSelect = document.getElementById("sort-order");

    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "all";
    if (sortSelect) sortSelect.value = "date-asc";
    
    updateOverview();
    searchEvent();
}

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    
    const searchForm = document.querySelector('section form');
    if (searchForm) {
        searchForm.addEventListener('submit', searchEvent);
        searchForm.addEventListener('reset', () => setTimeout(resetData, 10));
    }
});