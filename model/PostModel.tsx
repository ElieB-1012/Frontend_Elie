import PostApi from '../api/PostApi'
import FormData from 'form-data'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export type Post = {
    senderId: String,
    senderName: String,
    message: String,
    photo: String,
}

const getAllPosts = async () => {
    console.log("getAllPosts() 123")
    const res: any = await PostApi.getAllPosts()
    let posts = Array<Post>()
    if (res.data) {
        console.log(JSON.stringify(res.data) + 'Elie')
        res.data.forEach((obj: any) => {
            console.log("element: " + obj._id)
            const st: Post = {
                senderId: obj.senderID,
                senderName: obj.senderName,
                message: obj.message,
                photo: obj.avatarUrl
            }
            posts.push(st)
            console.log('posts:' + posts.length)
        });
    }
    return posts


}

const addPost = (post: Post) => {
    const  {userInfo} = useContext(AuthContext); 
    const data = {
        senderId: post.senderId,
        senderName: post.senderName,
        message: post.message,
        photo: post.photo,
    }
    try {
        const res = PostApi.addPost(data)
        console.log('API');
        
    } catch (err) {
        console.log("add student fail: " + err)
    }
}

const uploadImage = async (imageURI: String) => {
    var body = new FormData();
    body.append('file', { name: "name", type: 'image/jpeg', uri: imageURI });
    try {
        const res = await PostApi.uploadImage(body)
        if (!res.ok) {
            console.log("save failed " + res.problem)
        } else {
            if (res.data) {
                const d: any = res.data
                console.log("url" + d.url)
                return d.url
            }

        }
    } catch (error) {
        console.log('error save file' + error)
    }
    return ""



}
export default { getAllPosts, addPost, uploadImage }