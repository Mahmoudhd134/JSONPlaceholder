import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook";
import {fetchComments, fetchPostsById, voteUp} from "../../features/Posts/postsSlice";
import React, {useEffect} from "react";
import PostAuthor from "./PostAuthor";
import Imogy from "./Imogy";
import {reactions} from "../../DTOs/Posts/PostDto";
import Comment from "./Comment";

const Post = () => {
    const {id} = useParams()
    if (id == undefined || isNaN(+id))
        return <h1>Wrong Id</h1>

    const dispatch = useAppDispatch()

    const post = useAppSelector(s => s.posts.posts.find(p => p.id == id))

    useEffect(() => {
        if (post == undefined)
            dispatch(fetchPostsById(+id))

        if (post != undefined && post.comments == null)
            dispatch(fetchComments(+id))
    }, [post])

    const updateVote = (vote: string, id: string) => {
        return (e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(voteUp({id, vote}))
        }
    }

    if (post == undefined)
        return <h1>Loading</h1>

    return (
        <div className={'container'}>
            <div className={'card text-sm-start text-center my-3 border border-5 rounded rounded-5'}>
                <div className={'card-header w-100 d-flex'}>{post.title} </div>
                <div className={'card-body'}>
                    <div className={'card-text'}>{post.content}</div>
                    <div className={'card-text my-4'}>by: <b><PostAuthor post={post}/></b></div>
                    <div className={'row justify-content-sm-start justify-content-center mt-3'}>
                        <Imogy shape={reactions.like} text={post.reactions.like}
                               onClick={updateVote('like', post.id)}/>
                        <Imogy shape={reactions.love} text={post.reactions.love}
                               onClick={updateVote('love', post.id)}/>
                        <Imogy shape={reactions.haha} text={post.reactions.haha}
                               onClick={updateVote('haha', post.id)}/>
                        <Imogy shape={reactions.wow} text={post.reactions.wow}
                               onClick={updateVote('wow', post.id)}/>
                        <Imogy shape={reactions.sad} text={post.reactions.sad}
                               onClick={updateVote('sad', post.id)}/>
                        <Imogy shape={reactions.angry} text={post.reactions.angry}
                               onClick={updateVote('angry', post.id)}/>
                    </div>
                    <div className={'row justify-content-sm-start justify-content-center mt-3'}>
                        {post.comments?.map(c => <Comment key={c.id} comment={c}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;