function generatePassword() {
  const passwordLength = 10;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  const charsNum = charset.length;
  for (let i = 0; i < passwordLength; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charsNum));
  }
  return password;
}
console.log(generatePassword());

module.exports = {generatePassword};