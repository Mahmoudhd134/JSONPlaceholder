import {useParams} from "react-router-dom";

const User = () => {
    const {id} = useParams<string>()
    return (
        <div className={'container'}>
            
        </div>
    );
};

export default User;