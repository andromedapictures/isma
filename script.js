function mau() {
    alert("Makasih mau nerima aku :)");
    alert("Aku beneran bahagiaa dengan kamuuu 🥰💕");
    alert("Kirim jawabannya ke WA aku ya");
    location.assign("https://wa.me/?text=Aku%20mau%20jadi%20pacar%20kamu%20><");
  }

  function gak(button) {
    const viewportWidth = window.innerWidth - button.offsetWidth;
    const viewportHeight = window.innerHeight - button.offsetHeight;

    const minPosition = 0;

    const randomX = Math.floor(Math.random() * (viewportWidth - minPosition)) + minPosition;
    const randomY = Math.floor(Math.random() * (viewportHeight - minPosition)) + minPosition;

    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';

    button.style.zIndex = '9999';
  }