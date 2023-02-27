import apiClient from "./ClientApi";

const getAllPosts = async () => {
    return apiClient.get('/post')
}

const addPost = async (post: any) => {
    console.log('backend');
    return apiClient.post("/post", post)
    
}

const uploadImage = async (image: any) => {
    return apiClient.post('/file/file', image)
}
export default {
    getAllPosts,
    addPost, 
    uploadImage
}