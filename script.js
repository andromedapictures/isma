function mau() {
    alert("Makasih mau berjuang bareng aku :)");
    alert("Aku beneran bahagiaa dengan kamuuu 🥰💕");
    alert("Jangan ngambek dan selalu bareng aku ya. jangan lupa wa aku");
    <a href="https://wa.me/6281260021670?text=Aku%20sayang%20kamu.%20Kita%20berjuang%20bareng%20ya...!" target="_blank">
  Kirim Pesan WhatsApp
</a>

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
