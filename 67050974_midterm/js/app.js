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

let events = JSON.parse(localStorage.getItem("smartEventsData")) || [...initialEvents];

function saveData() {
  localStorage.setItem("smartEventsData", JSON.stringify(events));
}

function searchEvent() {
  const searchInput = document.getElementById('search-keyword');
  const typeSelect = document.getElementById('filter-category');
  const sortSelect = document.getElementById('sort-order');

  const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedCategory = typeSelect ? typeSelect.value : 'all';
  const sortBy = sortSelect ? sortSelect.value : 'date-asc';

  let search = events.filter(event => {
    const matchEvent = event.title.toLowerCase().includes(keyword) ||
                       event.speaker.toLowerCase().includes(keyword);
    const matchesCategory = selectedCategory === 'all' || event.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchEvent && matchesCategory;
  });

  search.sort((a, b) => {
    if (sortBy === "date-asc") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === "date-desc") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "seats-asc") {
      return a.seats - b.seats;
    } else if (sortBy === "seats-desc") {
      return b.seats - a.seats;
    }
    return 0;
  });

  const eventContainer = document.getElementById('eventContainer');
  if (!eventContainer) return;
  
  eventContainer.innerHTML = '';

  updateStatic();

  if (search.length === 0) {
    eventContainer.innerHTML = '<p>ไม่พบกิจกรรมที่ค้นหา</p>';
    return;
  }

  search.forEach(event => {
    const card = document.createElement('div');
    card.className = 'card';

    let btnText = `ลงทะเบียน (${event.seats})`;
    let isDisabled = false;

    if (event.isRegistered) {
      btnText = 'ลงทะเบียนเรียบร้อยแล้ว';
      isDisabled = true;
    } else if (event.seats <= 0) {
      btnText = 'ที่นั่งเต็ม';
      isDisabled = true;
    }

    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>ประเภท:</strong> ${event.category}</p>
      <p><strong>วิทยากร:</strong> ${event.speaker}</p>
      <p><strong>วันที่:</strong> ${event.date}</p>
      <p><strong>รายละเอียด:</strong> ${event.description || '-'}</p>
      <button type="button" 
              id="btn-${event.id}" 
              class="btn-register" 
              onclick="registerEvent(${event.id})"
              ${isDisabled ? 'disabled' : ''}>
        ${btnText}
      </button>
    `;  
    eventContainer.appendChild(card);
  });
}

function registerEvent(eventId) {
  const targetevent = events.find(event => event.id === eventId);
  
  if (targetevent && targetevent.seats > 0 && !targetevent.isRegistered) {
    targetevent.seats -= 1;
    targetevent.isRegistered = true;

    saveData();
    searchEvent();
  }
}

function resetData() {
  if (confirm("คุณต้องการคืนค่ากลับสู่ข้อมูลเริ่มต้นหรือไม่?")) {
    localStorage.removeItem("smartEventsData");
    events = JSON.parse(JSON.stringify(initialEvents));

    const searchInput = document.getElementById("search-keyword");
    const categorySelect = document.getElementById("filter-category");
    const sortSelect = document.getElementById("sort-order");

    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "all";
    if (sortSelect) sortSelect.value = "date-asc";

    searchEvent();
  }
}

function applyDarkMode(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("smartEventsDarkMode", isDark ? "1" : "0");
}

function toggleDarkMode() {
  const isDark = !document.body.classList.contains("dark-mode");
  applyDarkMode(isDark);
}

function openAdminPanel() {
  const panel = document.getElementById("admin-panel");
  if (panel) panel.classList.remove("hidden");
}

function closeAdminPanel() {
  const panel = document.getElementById("admin-panel");
  const form = document.getElementById("add-event-form");
  if (panel) panel.classList.add("hidden");
  if (form) form.reset();
}

function updateStatic() {
  const totalEventsEl = document.getElementById("total-events");
  const registeredEventsEl = document.getElementById("registered-events");
  const availableSeatsEl = document.getElementById("available-seats");

  if (totalEventsEl) totalEventsEl.innerText = events.length;
  if (registeredEventsEl) {
    registeredEventsEl.innerText = events.filter((e) => e.isRegistered).length;
  }
  if (availableSeatsEl) {
    availableSeatsEl.innerText = events.reduce((sum, e) => sum + e.seats, 0);
  }
}

function handleAddEvent(event) {
  event.preventDefault();

  const titleInput = document.getElementById("event-title");
  const categorySelect = document.getElementById("event-category");
  const speakerInput = document.getElementById("event-speaker");
  const dateInput = document.getElementById("event-date");
  const seatsInput = document.getElementById("event-seats");
  const descInput = document.getElementById("event-description");

  const title = titleInput.value.trim();
  const category = categorySelect.value;
  const speaker = speakerInput.value.trim();
  const dateValue = dateInput.value;
  const seats = parseInt(seatsInput.value, 10);
  const description = descInput ? descInput.value.trim() : '';

  if (!title || !category || !speaker || !dateValue || isNaN(seats)) {
    alert("กรุณากรอกข้อมูลให้ครบทุกช่องที่มีเครื่องหมาย *");
    return;
  }
  if (seats <= 0) {
    alert("จำนวนที่นั่งเปิดรับต้องมากกว่า 0 ที่นั่ง");
    return;
  }

  const selectedDate = new Date(dateValue);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    alert("วันที่จัดงานต้องไม่เป็นวันที่ในอดีต");
    return;
  }

  const newEvent = {
    id: Date.now(),
    title: title,
    category: category,
    speaker: speaker,
    date: dateValue,
    seats: seats,
    description: description,
    isRegistered: false
  };

  events.push(newEvent);
  saveData();
  searchEvent();

  const addForm = document.getElementById("add-event-form");
  if (addForm) addForm.reset();
}

function initApp() {
  const searchInput = document.getElementById('search-keyword');
  const typeSelect = document.getElementById('filter-category');
  const sortSelect = document.getElementById('sort-order');
  const resetBtn = document.getElementById("resetBtn");
  const addEventForm = document.getElementById("add-event-form");
  const darkModeBtn = document.getElementById("darkModeBtn");
  const addEventBtn = document.getElementById("addEventBtn");
  const closeAdminBtn = document.getElementById("closeAdminBtn");
  const cancelAdminBtn = document.getElementById("cancelAdminBtn");

  if (searchInput) searchInput.addEventListener("input", searchEvent);
  if (typeSelect) typeSelect.addEventListener("change", searchEvent);
  if (sortSelect) sortSelect.addEventListener("change", searchEvent);
  if (resetBtn) resetBtn.addEventListener("click", resetData);
  if (addEventForm) addEventForm.addEventListener("submit", handleAddEvent);
  if (darkModeBtn) darkModeBtn.addEventListener("click", toggleDarkMode);
  if (addEventBtn) addEventBtn.addEventListener("click", openAdminPanel);
  if (closeAdminBtn) closeAdminBtn.addEventListener("click", closeAdminPanel);
  if (cancelAdminBtn) cancelAdminBtn.addEventListener("click", closeAdminPanel);

  const savedDarkMode = localStorage.getItem("smartEventsDarkMode") === "1";
  applyDarkMode(savedDarkMode);

  searchEvent();
}

document.addEventListener("DOMContentLoaded", initApp);
