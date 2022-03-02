import axios from "axios"
async function user(num){
    const { data : users} = await axios(`https://jsonplaceholder.typicode.com/users/${num}`)
    const { data : posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${num}`)
    
    return {users , posts}
}

export default user 