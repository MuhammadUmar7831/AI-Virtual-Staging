import axios from "./axios"
const COLLECTION_BASE = 'auth'

export async function signinApiCall(body: SignInBody) {
  try {
    const res = await axios.post<ApiResponse<{ token: string }>>(`/${COLLECTION_BASE}/signin`, body)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function signupApiCall(body: SignUpBody) {
  try {
    const res = await axios.post<ApiResponse<{ token: string }>>(`/${COLLECTION_BASE}/signup`, body)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function signupVerifyApiCall(body: SignUpVerifyBody) {
  try {
    const res = await axios.post<ApiResponse<{ token: string }>>(`/${COLLECTION_BASE}/signup/verify`, body)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function googleAuthApiCall(body: GoogleAuthBody) {
  try {
    const res = await axios.post<ApiResponse<{ token: string }>>(`/${COLLECTION_BASE}/google-auth`, body)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}