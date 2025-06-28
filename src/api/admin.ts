import axios from "./axios"
const COLLECTION_BASE = 'admin'

export async function getAllUserApiCall() {
  try {
    const res = await axios.get<ApiResponse<User[]>>(`/${COLLECTION_BASE}/all-users`)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function addBalanceApiCall(userId: string, body: AddBalanceBody) {
  try {
    const res = await axios.post<ApiResponse<AddBalanceBody>>(`/${COLLECTION_BASE}/add-balance/${userId}`, body);
    return res.data;
  } catch (error) {
    console.error(error)
    return false;
  }
}