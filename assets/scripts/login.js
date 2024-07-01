function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Get the user data from local storage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user exists and the password matches
  const user = storedUsers.find(
    (user) =>
      (user.email === username || user.username === username) &&
      user.password === password
  );

  if (user) {
    alert("Login successful!");
    window.location.href = "/assets/pages/home.html"; 
  } else {
    alert("Invalid username or password");
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

// Uncomment the following line to simulate user registration (for testing purposes)
// registerUser();
