document.addEventListener("DOMContentLoaded", () => {
  const usersData = localStorage.getItem("users");
  if (usersData) {
    try {
      const usersArray = JSON.parse(usersData);
      console.log("Parsed users array: ", usersArray);
      // Assuming you want to find the first user object in the array
      const userObj = usersArray.find((user) => user); // Adjust the condition as needed

      if (userObj) {
        console.log(`Emailiniz: ${userObj.email || "Emailinizi daxil edin"}`);

        const userInfo = {
          "user-email": "Emailiniz:" + userObj.email || "Emailinizi daxil edin",
          "user-phone":
            "Telefon Nömrəniz:" + userObj.phone ||
            "Telefon nömrənizi daxil edin",
          "user-school":
            "Təhsil aldığınız məktəb:" + userObj.school ||
            "Məktəbinizi daxil edin",
          "user-address":
            "Addresiniz:" + userObj.address || "Adresinizi daxil edin",
        };

        for (const [id, value] of Object.entries(userInfo)) {
          const element = document.getElementById(id);
          if (element) {
            element.textContent = value;
          } else {
            console.error(`Element with id '${id}' not found`);
          }
        }
      } else {
        console.error("User not found");
      }
    } catch (error) {
      console.error("Error parsing JSON from local storage:", error);
    }
  } else {
    console.error("İstifadəçi tapılmadı");
  }
});
