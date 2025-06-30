import axios from '@/api/axios'


export async function generateImageApiCall(imageFile: File, selectedArea: string, selectedStyle: string) {
    try {
        // Step 1: Get Presigned URL
        const presignRes = await axios.post<ApiResponse<PresignedUrl>>('/generate/presign-url', {
            filename: imageFile.name,
            prefix: 'input/',
        })
        const { upload_url, public_url, content_type } = presignRes.data.data;

        // Step 2: Upload image using fetch PUT
        const uploadRes = await fetch(upload_url, {
            method: 'PUT',
            headers: {
                'Content-Type': content_type,
            },
            body: imageFile,
        });

        if (!uploadRes.ok) {
            throw new Error('Image upload failed.');
        }

        // Step 3: Call generate endpoint
        const generateRes = await axios.post<ApiResponse<GenerateImageBody>>('/generate/', {
            image_url: public_url,
            space: selectedArea,
            style: selectedStyle,
        });

        const result = generateRes;

        return result;
    } catch (error) {
        console.error(error)
        return false;
    }
}