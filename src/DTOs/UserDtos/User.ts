import {Address} from "./Address";
import {Company} from "./Company";
import UserTodoDto from "./UserTodoDto";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    todos: UserTodoDto[]
}
