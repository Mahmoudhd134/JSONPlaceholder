import UserTodoDto from "../../DTOs/UserDtos/UserTodoDto";
import {todoComplete} from "../../features/Users/UsersSlice";
import {useAppDispatch} from "../../Hooks/ReduxHook";

const UserTodo = (props: { todo: UserTodoDto }) => {
    const {todo} = props
    const dispatch = useAppDispatch()
    return (
        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
            style={{backgroundColor: '#f4f6f7'}}>
            <input className="form-check-input me-2" type="checkbox" checked={todo.completed}
                   onChange={e => dispatch(todoComplete({userId: todo.userId, todoId: todo.id}))}/>
            {todo.completed ? <s>{todo.title}</s> : <span>{todo.title}</span>}
        </li>);
};

export default UserTodo;