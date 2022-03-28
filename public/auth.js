const loginBtn = document.getElementById("loginBtn");
const userName = document.getElementById("username");
const Password = document.getElementById("password");

const submit = () => {
  const username = userName.value;
  const password = Password.value;
  const data = {
    username: username,
    password: password,
  };
  fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.message == "ok") {
        window.location = "/admin/home";
      } else {
        alert(data.message);
      }
    });
};
