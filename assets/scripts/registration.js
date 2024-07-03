document.addEventListener("DOMContentLoaded", function () {
  function registerUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const school = document.getElementById("school").value;

    if (!email || !password || !address || !phone || !school) {
      alert("Bütün sahələr doldurulmalıdır!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("Bu email ilə artıq qeydiyyat olunub!");
      return;
    }

    const newUser = {
      email,
      password,
      address,
      phone,
      school,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // alert("Qeydiyyatdan keçdiniz!");
    window.location.href = "/assets/pages/login.html";
  }

  document.getElementById("submitBtn").addEventListener("click", registerUser);
});
