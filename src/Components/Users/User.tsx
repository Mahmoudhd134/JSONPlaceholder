import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook";
import UserTodos from "./UserTodos";
import {fetchTodos} from "../../features/Users/UsersSlice";
import {useEffect} from "react";
import UserInfo from "./UserInfo";

const User = () => {
    const {id} = useParams()
    if (id == undefined || isNaN(+id))
        return <h1>Wrong Id</h1>

    const dispatch = useAppDispatch()
    const user = useAppSelector(s => s.users.find(u => u.id == +id!))


    useEffect(() => {
        if (user != undefined && user.todos == undefined)
            dispatch(fetchTodos(user.id))
    }, [user])

    if (user === undefined)
        return <h1>Wrong Id</h1>
    return (
        <>
            <UserInfo user={user}/>
            {user.todos ?
                <>
                    <div className={'container'}>
                        <UserTodos todos={user.todos}/>
                    </div>
                </> :
                <>
                    <h1>Loading...</h1>
                </>
            }
        </>
    );
};

export default User;