import apiClient from "./ClientApi";

const getAllPosts = async () => {
    return apiClient.get('/post2')
}

const addPost = async (post: any) => {
    return apiClient.post("/post2", post)
}
export default {
    getAllPosts,
    addPost
}