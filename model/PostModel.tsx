import PostApi from '../api/PostApi'
import FormData from 'form-data'

export type Post = {
    id: String,
    name: String,
    image: String,
}

const posts: Array<Post> = [
    {
        id: '1',
        name: 'Elie',
        image: './assets/avatar.jpg'
    },
    {
        id: '2',
        name: 'Yaacov',
        image: './assets/avatar.jpg'
    },
    {
        id: '3',
        name: 'Adane',
        image: './assets/avatar.jpg'
    },
]

const getAllPosts = async () => {
    console.log("getAllPosts() 123")
    const res: any = await PostApi.getAllPosts()
    let posts = Array<Post>()
    if (res.data) {
        console.log(JSON.stringify(res.data) + 'Elie')
        res.data.forEach((obj: any) => {
            console.log("element: " + obj._id)
            const st: Post = {
                id: obj._id,
                name: obj.name,
                image: obj.avatarUrl
            }
            posts.push(st)
            console.log('posts:' + posts.length)
        });
    }
    return posts


}

const addPost = (post: Post) => {
    console.log("addPost")
    const data = {
        _id: post.id,
        name: post.name,
        avatarUrl: post.image
    }
    try {
        const res = PostApi.addPost(data)
        console.log(data)
    } catch (err) {
        console.log("add student fail: " + err)
    }
}

const uploadImage =async  (imageURI: String) => {
        var body = new FormData();
        body.append('file', {name: "name",type: 'image/jpeg',uri: imageURI});
        try {
            const res = await PostApi.uploadImage(body)
            if(!res.ok){
                console.log("save failed " + res.problem)
                }else{
                    if (res.data){
                        const d:any = res.data
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