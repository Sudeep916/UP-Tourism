// script.js
document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.getElementById("tooltip");
  const districts = document.querySelectorAll(".district");

  districts.forEach(district => {
      district.addEventListener("mouseenter", (event) => {
          const cityName = event.target.getAttribute("data-city");
          tooltip.textContent = cityName;
          tooltip.style.opacity = 1;
      });

      district.addEventListener("mousemove", (event) => {
          // Position the tooltip directly at the cursor location
          tooltip.style.left = `${event.pageX}px`;
          tooltip.style.top = `${event.pageY}px`;
      });

      district.addEventListener("mouseleave", () => {
          tooltip.style.opacity = 0;
      });
  });
});
