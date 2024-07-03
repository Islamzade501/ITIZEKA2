function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const user = storedUsers.find(
    (user) =>
      (user.email === username || user.username === username) &&
      user.password === password
  );

  if (user) {
    alert("Login successful!");
    window.location.href = "/assets/pages/home.html";
  } else {
    alert("Istifadəçi adı vəya şifrə yalnışdır");
  }
}

function registerUser() {
  const users = [
    {
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    },
    {
      username: "anotheruser",
      email: "another@example.com",
      password: "password456",
    },
  ];

  localStorage.setItem("users", JSON.stringify(users));
}
