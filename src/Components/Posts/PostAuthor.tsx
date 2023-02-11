import Post from "../../DTOs/Posts/PostDto";
import {useAppSelector} from "../../Hooks/ReduxHook";
import {Link} from "react-router-dom";

const PostAuthor = (props: { post: Post }) => {
    const {post} = props
    const users = useAppSelector(s => s.users)

    return (
        <Link to={'/users/' + post.userId}>{users.find(u => u.id == post.userId)?.name ?? 'un known'}</Link>
    );
};

export default PostAuthor;