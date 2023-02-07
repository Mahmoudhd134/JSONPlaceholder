import {nanoid} from "@reduxjs/toolkit";

export default interface Post {
    id: string,
    title: string,
    content: string,
    reactions: { like: number, love: number, wow: number, haha: number, angry: number, sad: number }
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
    reactions: {like: 0, haha: 0, angry: 0, love: 0, wow: 0, sad: 0}
}
