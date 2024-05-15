import { useState } from "react"

function AddTodoForm(props) {

    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    const [newActivity, setnewActivity] = useState("")

    function handleChange(event) {
        setnewActivity(event.target.value)
    }

    function addActivity() {
        setactivityArr([...activityArr, { id: activityArr.length + 1, activity: newActivity }])
        setnewActivity("")
    }




    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newActivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-2" placeholder="Next Activity"></input>
                <button onClick={addActivity} className="bg-black p-2 text-white border border-black">Add</button>
            </div>
        </div>
    )
}

export default AddTodoForm
