import axios from "axios";
import {Post} from "types/Posts";

export const getPosts = async () => {
    const posts = await axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => resp.data);
    return posts;
};
