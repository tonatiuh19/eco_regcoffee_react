import axios from "axios";

//PROD
//const server = 'https://agustirri.com/api/';
//TEST
const server = "http://localhost:8015/api/";

export const signIn = async (email: String, password: String) => {
  try {
    const response = await axios.post(server + "login.php", {
      email: email,
      pwd: password,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const checkUser = async (username: String) => {
  try {
    const response = await axios.post(server + "checkUser.php", {
      username: username,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const insertUser = async (
  username: string,
  mail: string,
  pwd: string
) => {
  try {
    const response = await axios.post(server + "insertUser.php", {
      username: username,
      email: mail,
      pwd: pwd,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getUserInfo = async (username: string) => {
  try {
    const response = await axios.post(server + "getUserInfo.php", {
      username: username,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const userExist = async (username: string) => {
  try {
    const response = await axios.post(server + "userExist.php", {
      username: username,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getUserExtras = async (username: string) => {
  try {
    const response = await axios.post(server + "getUserExtras.php", {
      username: username,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const insertExtra = async (
  idUser: number,
  title: string,
  price: string,
  description: string,
  confirmation: string,
  suscription: string,
  suscriptionId: string,
  limit: number,
  question: string
) => {
  try {
    const response = await axios.post(server + "insertExtra.php", {
      idUser: idUser,
      title: title,
      price: price,
      description: description,
      confirmation: confirmation,
      suscription: suscription,
      suscriptionId: suscriptionId,
      limit: limit,
      question: question,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const editExtra = async (
  idUser: number,
  id_extra: number,
  title: string,
  price: string,
  description: string,
  confirmation: string,
  suscription: string,
  suscriptionId: string,
  limit: number,
  question: string
) => {
  try {
    const response = await axios.post(server + "editExtra.php", {
      idUser: idUser,
      id_extra: id_extra,
      title: title,
      price: price,
      description: description,
      confirmation: confirmation,
      suscription: suscription,
      suscriptionId: suscriptionId,
      limit: limit,
      question: question,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const deactivateExtra = async (id_extra: number) => {
  try {
    const response = await axios.post(server + "deactivateExtra.php", {
      id_extra: id_extra,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const getUserPosts = async (username: string) => {
  try {
    const response = await axios.post(server + "getUserPosts.php", {
      username: username,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const insertPost = async (idUser: number, text: string) => {
  try {
    const response = await axios.post(server + "insertPost.php", {
      idUser: idUser,
      text: text,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const deactivatePost = async (id_users_posts: number) => {
  try {
    const response = await axios.post(server + "deactivatePost.php", {
      id_users_posts: id_users_posts,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};

export const editPost = async (
  idUser: number,
  text: string,
  id_users_posts: number
) => {
  try {
    const response = await axios.post(server + "editPost.php", {
      idUser: idUser,
      text: text,
      id_users_posts: id_users_posts,
    });
    if (response.data === 0) {
      return 0;
    } else {
      return response.data;
    }
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};
