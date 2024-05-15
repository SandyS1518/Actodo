import Header from '../Components/Header';
import Card from '../Components/Card';
import TodoContainer from '../Components/TodoContainer';
import { useLocation } from "react-router-dom"



function Landing() {

    const data = useLocation()

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <Header username={data.state.user}></Header>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"101°C"} subtitle={"Chennai"}> </Card>
                    <Card bgcolor={"#FD6663"} title={"May"} subtitle={"18.29"}></Card>
                    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}></Card>
                </div>
                <TodoContainer></TodoContainer>
            </div>


        </div>
    );
}

export default Landing