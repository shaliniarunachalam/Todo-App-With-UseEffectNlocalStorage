import React,{useState} from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Container,
} from "reactstrap";
import {v4} from "uuid";

const TodoForm =({addTodos})=>{
    const[todoString,setTodoString]=useState("");
    const handleSubmit=e=>{
        e.preventDefault();
        if(todoString==="")
        {
            return alert("Please fill some value")
        }

        const todo={
            todoString,
            id:v4()
        }
        addTodos(todo);
        setTodoString("");
    }
    
    return(
<Form onSubmit={handleSubmit} className="form">
    <FormGroup>
        <InputGroup>
        <Input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter a Todo"
        value={todoString}
        onChange={e=>setTodoString(e.target.value)}
        />
        <InputGroupAddon>
        <Button
        color="success"
        >
        ADD
        </Button>
        </InputGroupAddon>
        </InputGroup>
    </FormGroup>
</Form>
    );
}
export default TodoForm;