import TodoItem from "./TodoItem"

function TodoList(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr



    return (
        <div className="bg-blue-500 border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length === 0 ? <p>You haven't added anything yet</p> : ""}

            {
                activityArr.map(function (item,index) {
                    return <TodoItem activity={item.activity} index={index} id={item.id} activityArr={activityArr} setactivityArr={setactivityArr}></TodoItem>
                })

            }
        </div>
    )
}

export default TodoList