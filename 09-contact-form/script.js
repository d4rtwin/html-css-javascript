const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Lấy dữ liệu input
  const inputs = form.querySelectorAll("input, textarea");

  let formData = {};

  inputs.forEach((input) => {
    formData[input.placeholder] = input.value;
  });

  console.log("Form Data:", formData);

  // Hiển thị thông báo
  alert("Message sent successfully!");

  // Reset form
  form.reset();
});