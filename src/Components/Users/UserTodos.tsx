import UserTodoDto from "../../DTOs/UserDtos/UserTodoDto";
import UserTodo from "./UserTodo";

const UserTodos = (props: { todos: UserTodoDto[] }) => {
    const {todos} = props
    return (
        <div className={'container my-4 d-flex flex-column align-items-center'}>
            <h3>Todos</h3>
            <ul className={'list-group w-75'}>
                {todos.map(t => <UserTodo key={t.id} todo={t}/>)}
            </ul>
        </div>
    );

};

export default UserTodos;