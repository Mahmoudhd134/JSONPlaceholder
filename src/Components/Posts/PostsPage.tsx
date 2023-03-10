import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook";
import {Link, useLocation} from "react-router-dom";
import Post, {reactions} from "../../DTOs/Posts/PostDto";
import Imogy from "./Imogy";
import React, {useEffect, useState} from "react";
import {fetchPosts, increaseCurrentPostsShowedNumber, voteUp} from "../../features/Posts/postsSlice";
import Modes from './Modes'
import EditPost from './EditPost'
import PostAuthor from "./PostAuthor";

const PostsPage = () => {
    const [mode, setMode] = useState<Modes>(Modes.Show)
    const [postToEdit, setPostToEdit] = useState<Post | null>(null)
    const posts = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()
    const location = useLocation();
    const users = useAppSelector(s => s.users)
    const [user, setUserId] = useState(-1)

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);


    if (posts.posts.length == 0)
        return <h1>Loading...</h1>

    const updateVote = (vote: string, id: string) => {
        return (e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(voteUp({id, vote}))
        }
    }

    return (
        <div className={'container'}>
            {mode == Modes.Show && (<>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        {user == -1 ? 'Chose An User' : users[user - 1].username}
                    </button>
                    <ul className="dropdown-menu">
                        {users.map(u => <li key={u.id} className={'dropdown-item'}
                                            onClick={e => setUserId(u.id)}
                        >{u.username}</li>)}
                    </ul>
                </div>

                <h3>Posts</h3>
                {posts.posts
                    .filter(p => user == -1 ? true : p.userId == user)
                    .slice(0, posts.currentShowedNumber)
                    .map(p => (
                        <div key={p.id}
                             className={'card text-sm-start text-center my-3 border border-5 rounded rounded-5'}>
                            <div className={'card-header w-100 d-flex'}>{p.title}
                                <span className={'ms-auto'}
                                      onClick={e => {
                                          setPostToEdit(p)
                                          setMode(Modes.Edit)
                                      }
                                      }
                                      style={{cursor: 'pointer'}}>
                                edit</span>
                            </div>
                            <div className={'card-body'}>
                                <div className={'card-text'}>{p.content}</div>
                                <div className={'card-text my-4'}>by: <b><PostAuthor post={p}/></b></div>
                                <div className={'card-text my-4'}><Link to={'/posts/' + p.id}>comments</Link></div>
                                <div className={'row justify-content-sm-start justify-content-center mt-3'}>
                                    <Imogy shape={reactions.like} text={p.reactions.like}
                                           onClick={updateVote('like', p.id)}/>
                                    <Imogy shape={reactions.love} text={p.reactions.love}
                                           onClick={updateVote('love', p.id)}/>
                                    <Imogy shape={reactions.haha} text={p.reactions.haha}
                                           onClick={updateVote('haha', p.id)}/>
                                    <Imogy shape={reactions.wow} text={p.reactions.wow}
                                           onClick={updateVote('wow', p.id)}/>
                                    <Imogy shape={reactions.sad} text={p.reactions.sad}
                                           onClick={updateVote('sad', p.id)}/>
                                    <Imogy shape={reactions.angry} text={p.reactions.angry}
                                           onClick={updateVote('angry', p.id)}/>
                                </div>
                            </div>
                        </div>))}

                <div className={'row my-3 d-flex justify-content-center'}>
                    <button className={'btn btn-outline-primary w-50'}
                            onClick={e => {
                                dispatch(increaseCurrentPostsShowedNumber())
                            }}>
                        Show More
                    </button>
                </div>

                <div className={'row my-3'}>
                    <div className={'col'}>
                        <Link className={'btn btn-outline-primary'}
                              to={'/posts/add'}
                              state={location.state}
                        >Add Post
                        </Link>
                    </div>
                </div>
            </>)}

            {mode == Modes.Edit && (<>
                <EditPost post={postToEdit!} setMode={setMode}/>
            </>)}
        </div>
    );
};

export default PostsPage;