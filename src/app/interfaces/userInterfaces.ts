interface user {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
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

export type { user, userLogin, userRegister, userUpdate, userUpdatePassword, userUpdateStatus, userUpdateImage };
