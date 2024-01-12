// references
const passwordBox = document.querySelector("#password");
const lenght = 12;
const generateButton = document.querySelector("#generator");
const copy = document.querySelector("#copy");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+=-/";
const allChars = lowercase + uppercase + numbers + symbols;

generateButton.addEventListener("click", () => {
  let password = "";
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
});

copy.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
});
