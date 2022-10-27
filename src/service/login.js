import api from "./api.js";

// Verifica se o usuário existe
async function checkUser(user, password) {
  const reponse = await api.post("/librian/login-collaborator", {
    user,
    password,
  });

  return reponse;
}

export default checkUser;
