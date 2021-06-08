export const validateMail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const decode_utf8 = (s: string) => {
  return decodeURIComponent(escape(s));
};

export const deleteSpecialChars = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const isLoggedIn = () => {
  const loggedInUser = localStorage.getItem("08191993");

  if (loggedInUser) {
    return true;
  } else {
    return false;
  }
};

export const getUserName = () => {
  return localStorage.getItem("08191993UN") || "";
};
