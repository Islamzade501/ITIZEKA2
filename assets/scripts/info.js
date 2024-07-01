document.addEventListener("DOMContentLoaded", () => {
  // Function to retrieve data from local storage and display it in the appropriate elements
  function displayUserInfo(emailToFind) {
    const usersData = localStorage.getItem("users");
    if (usersData) {
      const usersArray = JSON.parse(usersData);
      const userObj = usersArray.find((user) => user.email === emailToFind);

      if (userObj) {
        const userName = userObj.name || "Adınızı daxil edin";
        const userSurname = userObj.surname || "Soyadınızı daxil edin";
        const userEmail = userObj.email || "Emailinizi daxil edin";
        const userPhone = userObj.phone || "Telefon nömrənizi daxil edin";
        const userSchool = userObj.school || "Məktəbinizi daxil edin";
        const userAddress = userObj.address || "Adresinizi daxil edin";

        document.getElementById("user-name").textContent += ` ${userName}`;
        document.getElementById(
          "user-surname"
        ).textContent += ` ${userSurname}`;
        document.getElementById("user-email").textContent += ` ${userEmail}`;
        document.getElementById("user-phone").textContent += ` ${userPhone}`;
        document.getElementById("user-school").textContent += ` ${userSchool}`;
        document.getElementById(
          "user-address"
        ).textContent += ` ${userAddress}`;
      } else {
        console.error("User not found");
      }
    } else {
      console.error("No users data found in local storage");
    }
  }

  // Call the function to display user info on page load
  displayUserInfo("qarayev.mehdi@gmail.com");
});
