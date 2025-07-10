function mau() {
    alert("Makasih mau berjuang bareng aku :)");
    alert("Aku beneran bahagiaa dengan kamuuu 🥰💕");
    alert("Jangan ngambek dan selalu bareng aku ya. jangan lupa wa aku");
    location.assign("https://wa.me/081260021670/text=Aku%20sayang%20kamu.%20kita%20berjuang%20bareng%20ya...!><");
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
