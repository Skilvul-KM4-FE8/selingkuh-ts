interface user {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface registerUserInterface {
  username: string;
}

interface userLogin {
  email: string;
  password: string;
}

interface userRegister {
  name: string;
  email: string;
  password: string;
}

interface responseRegister {
  message: string;

}

interface userUpdate {
  name: string;
  email: string;
  image: string;
}

interface userUpdatePassword {
  password: string;
  newPassword: string;
}

interface userUpdateStatus {
  status: string;
}

interface userUpdateImage {
  image: string;
}

export type {
  user,
  userLogin,
  userRegister,
  userUpdate,
  userUpdatePassword,
  userUpdateStatus,
  userUpdateImage,
};

interface registerUserInterface {
  username: string;
  email: string;
  password: string;
  message?: string;
  re_password: string;
}

export type { registerUserInterface, responseRegister };
