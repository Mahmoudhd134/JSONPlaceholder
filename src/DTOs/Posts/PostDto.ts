import {nanoid} from "@reduxjs/toolkit";
import CommentDto from "./CommentDto";

export default interface Post {
    id: string,
    title: string,
    content: string,
    userId: number,
    reactions: { like: number, love: number, wow: number, haha: number, angry: number, sad: number },
    comments: CommentDto[] | null
}

export const reactions = {
    like: '👍',
    love: '❤️',
    wow: '😯',
    haha: '😂',
    angry: '😡',
    sad: '😢'
}

export const emptyPost: Post = {
    id: nanoid(),
    content: '',
    title: '',
    userId: 0,
    reactions: {like: 0, haha: 0, angry: 0, love: 0, wow: 0, sad: 0},
    comments: null
}
