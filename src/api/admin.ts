import axios from "./axios"
const COLLECTION_BASE = 'admin'

export async function getAllUserApiCall() {
  try {
    const res = await axios.get<ApiResponse<User>>(`/${COLLECTION_BASE}/all-users`)
    console.log("RES", res);
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}