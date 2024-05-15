import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer() {



    const [activityArr, setactivityArr] = useState([

        {
            id:1,
            activity:"Wake up at 6"
        },
        {
            id:2,
            activity:"go for a walk"
        }, {
            id:3,
            activity:"take a bath"
        }
        ])

        
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}></AddTodoForm>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
            </div>
        </div>
    )
}

export default TodoContainer