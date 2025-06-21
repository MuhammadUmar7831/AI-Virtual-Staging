import axios from "./axios"
const COLLECTION_BASE = 'user'

export async function getUserApiCall() {
  try {
    const res = await axios.post<ApiResponse<User>>(`/${COLLECTION_BASE}/`)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}