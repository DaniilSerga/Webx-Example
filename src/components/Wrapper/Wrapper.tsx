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

    if (posts?.state === "pending") {
        return <div>loading</div>;
    }

    if (posts?.state === "rejected") {
        return <div>rejected</div>;
    }

    return (
        <ul>
            {posts?.value.map((post) => (
                <li key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
});

export default Wrapper;
