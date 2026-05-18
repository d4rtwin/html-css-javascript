const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Lấy card hiện tại
    const currentCard = button.closest(".card");

    // Xóa active cũ
    cards.forEach((card) => {
      card.classList.remove("selected");
    });

    // Add active mới
    currentCard.classList.add("selected");

    // Lấy tên plan
    const planName = currentCard.querySelector("h3").textContent;
    const price = currentCard.querySelector(".amount").textContent;

    // Reset button text
    buttons.forEach((btn) => {
      btn.textContent = "Get Started";
    });

    // Đổi text button hiện tại
    button.textContent = "Selected";

    // Alert
    alert(`You selected the ${planName} plan for $${price}/month`);
  });
});

// Hover animation icon
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const icon = card.querySelector(".plan-icon i");

    icon.style.transform = "scale(1.2) rotate(10deg)";
    icon.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    const icon = card.querySelector(".plan-icon i");

    icon.style.transform = "scale(1) rotate(0deg)";
  });
});