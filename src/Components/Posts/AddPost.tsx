import React, {useState} from "react";
import Post, {emptyPost} from "../../features/Posts/PostsState";
import {useAppDispatch} from "../../Hooks/ReduxHook";
import {addPost} from "../../features/Posts/postsSlice";
import {useLocation, useNavigate} from "react-router-dom";
import {nanoid} from "@reduxjs/toolkit";
import {Alert} from "react-bootstrap";

const AddPost = () => {
    const [post, setPost] = useState<Post>({...emptyPost, id: nanoid()})
    const [err, setErr] = useState('')
    const dispatch = useAppDispatch()
    const navigator = useNavigate()
    const location = useLocation()
    const add = (e: React.FormEvent) => {
        e.preventDefault()

        if (post.title.trim().length == 0 || post.content.trim().length == 0) {
            setErr('Complete All Fields')
            return
        }

        dispatch(addPost(post))
        navigator('/posts', {state: location.state})
    }

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setPost(p => ({...p, [name]: value}))
    }

    return (
        <form className={'container d-flex flex-column align-items-center'} onSubmit={add}>
            {err.length > 0 && <h3 className={'text-center'}><Alert variant={'danger'}>{err}</Alert></h3>}
            <label htmlFor="title" className={'col-form-label'}>Title</label>
            <input type="text" id={'title'} className={'form-control w-50'} name={'title'} onChange={change}
                   value={post.title}/>
            <br/>
            <label htmlFor="content" className={'col-form-label'}>Content</label>
            <textarea id={'content'} className={'form-control w-50'} name={'content'} onChange={change}
                      value={post.content}/>
            <br/>
            <button className={'btn btn-outline-primary w-25'}>Add</button>
        </form>
    );
};

export default AddPost;