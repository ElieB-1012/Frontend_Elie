export type Post= {
    id: String,
    name: String,
    image: String,
}

const posts: Array<Post> = [
    {
        id:'1',
        name: 'Elie',
        image: './assets/avatar.jpg'
    },
    {
        id:'2',
        name: 'Yaacov',
        image: './assets/avatar.jpg'
    },
    {
        id:'3',
        name: 'Adane',
        image: './assets/avatar.jpg'
    },
]

const getAllPosts = () =>{
    return posts
}

const addPost = (post:Post) => {
    posts.push(post)
}

export default { getAllPosts, addPost}