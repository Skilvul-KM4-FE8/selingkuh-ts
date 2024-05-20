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

interface registerUserInterface {
  username: string;
  email: string;
  password: string;
}

export type {
  user,
  registerUserInterface
}