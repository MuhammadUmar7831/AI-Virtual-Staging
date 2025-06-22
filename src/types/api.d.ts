interface ApiResponse<T = undefined> {
  status: "error" | "success",
  message: string,
  data: T
}

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
  name: string;
  email: string;
};