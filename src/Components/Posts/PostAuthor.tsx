import Post from "../../DTOs/Posts/PostDto";
import {useAppSelector} from "../../Hooks/ReduxHook";

const PostAuthor = (props: { post: Post }) => {
    const {post} = props
    const users = useAppSelector(s => s.users)

    return (
        <span>{users.find(u => u.id == post.userId)?.name ?? 'un known'}</span>
    );
};

export default PostAuthor;