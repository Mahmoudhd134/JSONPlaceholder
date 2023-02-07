import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook";
import {Link, useLocation} from "react-router-dom";
import {reactions} from "../../features/Posts/PostsState";
import Imogy from "./Imogy";
import React from "react";
import {voteUp} from "../../features/Posts/postsSlice";

const PostsPage = () => {
    const posts = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()
    const location = useLocation()

    const updateVote = (vote: string, id: string) => {
        return (e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(voteUp({id, vote}))
        }
    }

    return (
        <div className={'container'}>
            <h3>Posts</h3>
            {posts.map(p => (<div key={p.id} className={'card text-sm-start text-center my-3'}>
                <div className={'card-header'}>{p.title}</div>
                <div className={'card-body'}>
                    <div className={'card-text'}>{p.content}</div>
                    <div className={'row justify-content-sm-start justify-content-center mt-3'}>
                        <Imogy shape={reactions.like} text={p.reactions.like} onClick={updateVote('like', p.id)}/>
                        <Imogy shape={reactions.love} text={p.reactions.love} onClick={updateVote('love', p.id)}/>
                        <Imogy shape={reactions.haha} text={p.reactions.haha} onClick={updateVote('haha', p.id)}/>
                        <Imogy shape={reactions.wow} text={p.reactions.wow} onClick={updateVote('wow', p.id)}/>
                        <Imogy shape={reactions.sad} text={p.reactions.sad} onClick={updateVote('sad', p.id)}/>
                        <Imogy shape={reactions.angry} text={p.reactions.angry} onClick={updateVote('angry', p.id)}/>
                    </div>
                </div>
            </div>))}

            <div className={'row my-3'}>
                <div className={'col'}>
                    <Link className={'btn btn-outline-primary'}
                          to={'/posts/add'}
                          state={location.state}
                    >Add Post
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostsPage;