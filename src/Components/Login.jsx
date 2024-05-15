import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props) {
    const navigate = useNavigate()
    const [Eusername, SetEusername] = useState()
    const [Epassword, SetEpassword] = useState()
    const [Ruser, SetRuser] = useState(true)
    const Users = props.Users

    var Userfound = false



    function checkUser() {
        Users.forEach(function (item) {
            if (item.username === Eusername && item.password === Epassword) {
                console.log("succesful")
                Userfound = true
                navigate("/Landingpage",{state:{user:Eusername}})
            }

            if (Userfound === false) {
                console.log("login failed")
                SetRuser(false)
            }
        })
    }
    function handleUinput(event) {
        SetEusername(event.target.value)
    }
    function handleUpassword(event) {
        SetEpassword(event.target.value)

    }



    return (
        <div>
            <div className="bg-black p-10">
                <div className="bg-white p-10 border rounded-md ">
                    <h1 className="text-3xl font-medium">Hey all</h1>
                    {Ruser ? <p>I can help you to manage your activities after you Login</p> : <p className="text-red-600">Please Signup before you login</p>}
                    <div className="flex flex-col gap-3 my-2">
                        <input onChange={handleUinput} className="border-black border rounded-md w-52 p-2 bg-transparent" type="text" placeholder="Enter your username"></input>
                        <input onChange={handleUpassword} className="bg-transparent border-black border rounded-md w-52 p-2" type="text" placeholder="Enter your Password"></input>
                        <button onClick={checkUser} className="w-24 rounded-md p-2 bg-purple-400">Login</button>
                        <p>Don't have an account? <Link to={"/Signup"} className="underline">Signup</Link> </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login