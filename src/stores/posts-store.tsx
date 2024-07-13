import {getPosts} from "api/get-posts";
import {makeAutoObservable} from "mobx";
import {fromPromise, IPromiseBasedObservable} from "mobx-utils";
import {Post} from "types/Posts";

class PostsStore {
    posts?: IPromiseBasedObservable<Post[]>;

    constructor() {
        makeAutoObservable(this);
    }

    getPostsAction = async () => {
        this.posts = fromPromise(getPosts());
    };
}

export default new PostsStore();
