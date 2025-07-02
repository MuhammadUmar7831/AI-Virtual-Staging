
import axios from '@/api/axios'


export async function checkoutApiCall(imageCount: number) {
    try {
        const res = await axios.post<ApiResponse<CheckoutBody>>('/payment/create-checkout-session', {
            image_count: imageCount
        })
        // In the res we have a list of fields/values coming from the response but the only useful thing is the url field 


        const url = res.data.data.url;
        return url;
    } catch (error) {
        console.error(error)
        return false;
    }
}

export async function getCheckoutDetailsApiCall(session_id: string) {
    try {
        const res = await axios.get<ApiResponse<CheckoutSessionBody>>(`/payment/get-session-amount/${session_id}`);
        return res;
    } catch (error) {
        console.error(error)
        return false
    }
}