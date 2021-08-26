import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import {FaTrash} from "react-icons/fa";

const Todos = ({todos,markComplete})=>
{
return(
    <ListGroup className="mb-2 mt-5 items">
        {todos.map(todo=>(
            <ListGroupItem key={todo.id}>
             {todo.todoString}
             <span className="float-end"
             onClick={()=>markComplete(todo.id)}
             >
                 <FaTrash></FaTrash>
             </span>
            </ListGroupItem>
        ))}
    </ListGroup>

);

}

export default Todos;