const card = document.querySelector('.p-card');
const img = card.querySelector('img');

card.addEventListener('mousemove', e => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  img.style.transform =
    `scale(1.06) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
});

card.addEventListener('mouseleave', () => {
  img.style.transform = "";
});


// Telegram
function sendTelegramMessage(event) {
  event.preventDefault(); // 
  const botToken = '7873490815:AAH3VZaf6lgmlicWmgZDw39i7HpO5qz_Ox8';
  //5961923922:AAHYA1BcseC8bqiPslC0xI72uZtLx3Erads
  const chatId = '6171556609';
  const name = document.getElementById('fname').value;
  const number = document.getElementById('Number').value;
  const message = document.getElementById('Message').value;

  const text = `--------------%0AYuboruvchining ismi: ${name}%0ATelefon raqam: ${number}%0AXabar: ${message}%0A`;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;
  fetch(url)
    .then(response => {
      alert('Xabar yuborildi!');
      document.querySelector('form').reset();
    })
    .catch(error => {
      console.error('Xatolik yuz berdi:', error);
    });
}


//foter
// footer year
(function () {
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if (el) el.textContent = y;
})();


function myFunction() {
  document.getElementById("myLinks").classList.toggle("open");
}



// Matrix effect for skill boxes

const boxes = document.querySelectorAll('.skill-box');

boxes.forEach(box => {
  const canvas = box.querySelector('.matrix');
  const ctx = canvas.getContext('2d');

  canvas.width = box.clientWidth;
  canvas.height = box.clientHeight;

  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  // Har bir skill-box uchun o'z belgilaringizni belgilay olasiz
  // Misol: "0101" yoki "ABC123"
  const chars = box.dataset.chars || "Sirkte aslan olacak ama Bozkurt olmayacak Bozkurt kimseye hizmet etmez"; // HTMLda data-chars="01XYZ" qo'yish mumkin

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#5fd32aff";
    ctx.font = fontSize + "px monospace";

    drops.forEach((y, i) => {
      // Belgini siz belgilagan chars ichidan tanlaydi
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  let interval;

  box.addEventListener("mouseenter", () => {
    interval = setInterval(drawMatrix, 50);
  });

  box.addEventListener("mouseleave", () => {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});
