import React, {SetStateAction, useState} from "react";
import Post from "../../DTOs/Posts/PostDto";
import EditPostDto from '../../DTOs/Posts/EditPostDto'
import {useAppDispatch} from "../../Hooks/ReduxHook";
import {edit} from '../../features/Posts/postsSlice'
import {useLocation, useNavigate} from "react-router-dom";
import {Alert} from "react-bootstrap";
import Modes from './Modes'

const EditPost = (props: { post: Post, setMode: React.Dispatch<SetStateAction<Modes>> }) => {
    const [editPost, setEditPost] = useState<EditPostDto>({...props.post})
    const [err, setErr] = useState('')
    const dispatch = useAppDispatch()
    const navigator = useNavigate()
    const location = useLocation()
    const add = (e: React.FormEvent) => {
        e.preventDefault()

        if (editPost.title.trim().length == 0 || editPost.content.trim().length == 0) {
            setErr('Complete All Fields')
            return
        }

        dispatch(edit(editPost))
        props.setMode(Modes.Show)
    }

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setEditPost(p => ({...p, [name]: value}))
    }

    return (
        <form className={'container d-flex flex-column align-items-center'} onSubmit={add}>
            {err.length > 0 && <h3 className={'text-center'}><Alert variant={'danger'}>{err}</Alert></h3>}
            <label htmlFor="title" className={'col-form-label'}>Title</label>
            <input type="text" id={'title'} className={'form-control w-50'} name={'title'} onChange={change}
                   value={editPost.title}/>
            <br/>
            <label htmlFor="content" className={'col-form-label'}>Content</label>
            <textarea id={'content'} className={'form-control w-50'} name={'content'} onChange={change}
                      value={editPost.content}/>
            <br/>
            <button className={'btn btn-outline-primary w-25'}>Save Changes</button>
        </form>
    );
};

export default EditPost;