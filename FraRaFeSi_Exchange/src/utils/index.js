import { MD5 } from "crypto-js";

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const BASE_URL = "http://localhost:3000";
export function generateRandomString() {
  var passwordHash = "";
  var randomCaracter =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  for (var i = 0; i < 25; i++) {
    var randomPoz = Math.floor(Math.random() * randomCaracter.length);
    passwordHash += randomCaracter.substring(randomPoz, randomPoz + 1);
  }
  return passwordHash;
}
function createTransactionHash(id_crypto, id_user, amount, sign) {
  const timeStamp = new Date().toISOString();

  return MD5(`${timeStamp}${sign}${id_crypto}${id_user}${amount}`).toString();
}
export async function createTransaction(
  id_crypto,
  id_user,
  amount,
  previous_balance,
  spentAmount,
  sign
) {
  const payload = {
    id: createTransactionHash(id_crypto, id_user, amount, sign),
    id_crypto,
    id_user,
    amount,
    previous_balance,
    spentAmount,
    sign,
  };
  return await fetch(BASE_URL + "/transactions", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
