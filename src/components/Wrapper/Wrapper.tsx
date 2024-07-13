import {observer} from "mobx-react-lite";
import React, {FC, useEffect} from "react";
import postsStore from "stores/posts-store";

const Wrapper: FC = observer(() => {
    const {getPostsAction, posts} = postsStore;

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    useEffect(() => {
        getPostsAction();
    }, []);

    if (!posts) {
        return null;
    }

    return posts.case({
        pending: () => <div>loading</div>,
        rejected: () => <div>rejected</div>,
        fulfilled: (value) => (
            <ul>
                {value.map((post) => (
                    <li key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        )
    });
});

export default Wrapper;
