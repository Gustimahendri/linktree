<script>
  window.addEventListener("DOMContentLoaded", () => {
    VANTA.BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      wingSpan: 40.0,
      speedLimit: 8.0,
      separation: 100.0,
      alignment: 43.0,
      quantity: 4.0,
      backgroundAlpha: 0.0,
    });

    setTimeout(() => {
      document.querySelector("main").style.opacity = "1";
      document.querySelector("main").style.filter = "none";

      const buttons = document.querySelectorAll(".btn");
      buttons.forEach((button, index) => {
        setTimeout(() => {
          button.classList.add("btn-animate");
        }, 500 * (index + 1));
      });
    }, 1000);
  });
</script>
