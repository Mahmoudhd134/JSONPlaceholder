import UserTodoDto from "../../DTOs/UserDtos/UserTodoDto";
import UserTodo from "./UserTodo";
import {useState} from "react";

const UserTodos = (props: { todos: UserTodoDto[] }) => {
    const {todos} = props
    const [showAll, setShowAll] = useState(false)
    return (
        <div className={'container my-4 d-flex flex-column align-items-center'}>
            <h3>Todos</h3>
            <ul className={'list-group w-75'}>
                {todos.slice(0, showAll ? -1 : 5).map(t => <UserTodo key={t.id} todo={t}/>)}
            </ul>
            {!showAll &&
                <button className={'btn btn-outline-primary'} onClick={e => setShowAll(true)}>See All Todos</button>}
        </div>
    );

};

export default UserTodos;