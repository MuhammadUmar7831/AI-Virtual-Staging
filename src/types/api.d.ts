interface ApiResponse<T = undefined> {
  status: "error" | "success",
  message: string,
  role: Role,
  data: T
}

type Role = 'customer' | 'admin'


interface SignInBody {
  email: string;
  password: string;
}

interface SignUpBody {
  name: string;
  email: string;
  password: string;
}

interface SignUpVerifyBody {
  token: string;
  otp: string;
}

interface GoogleAuthBody {
  token: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  balance: number;
};

interface Balance {
  balance: number;
}