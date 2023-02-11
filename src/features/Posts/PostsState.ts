import Post from "../../DTOs/Posts/PostDto";

export default interface PostsState {
    posts: Post[],
    currentShowedNumber: number
}