import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup(props) {

    const navigate = useNavigate()
    const Users = props.Users
    const SetUsers = props.SetUsers


    const [Eusername, SetEusername] = useState()
    const [Epassword, SetEpassword] = useState()

    function handleUinput(event) {
        SetEusername(event.target.value)
    }
    function handleUpassword(event) {
        SetEpassword(event.target.value)

    }
    function Adduser() {
        SetUsers([...Users, { username: Eusername, password: Epassword }])
        navigate("/")

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey all</h1>
                <p>I can help you to manage your activities Signup here</p>
                <div className="flex flex-col gap-3 my-2">
                    <input className="border-black border rounded-md w-52 p-2 bg-transparent" type="text" placeholder="Enter your username" onChange={handleUinput}></input>
                    <input className="bg-transparent border-black border rounded-md w-52 p-2" type="text" placeholder="Enter your Password" onChange={handleUpassword}></input>
                    <input className="bg-transparent border-black border rounded-md w-52 p-2" type="text" placeholder="Re enter your Password "></input>
                    <button className="w-24 rounded-md p-2 bg-yellow-400" onClick={Adduser}>Signup</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link> </p>

                </div>
            </div>
        </div>)
}

export default Signup