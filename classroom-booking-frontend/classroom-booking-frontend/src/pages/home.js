import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


const HomePage = () => {
    const navigator = useNavigate();

    function login() {
        console.log("login")
        navigator('/LogIn');
    }
    return (
        <div className="h-dv">
            {/* navigation*/}
            <header className="h-10 static">

                <nav className="p-2 flex justify-between border-b shadow">
                    <div className="text-red">
                        <div>Logo Name</div>
                    </div>

                    <div>
                        <a onClick={login} className="hover:border hover:rounded-md hover:p-1 hover:border-black cursor-pointer">Login</a>
                    </div>
                </nav>
            </header>

            {/**main */}
            <main>
                {/**welceome message */}
                <div>
                    <div className="h-96 bg-red-200">
                        <p className="p-10 bg-red-200 text-4xl ">
                            Welcome to ...
                            Message
                        </p>
                    </div>
                </div>
                {/**services */}
                <div>
                    <div className="flex justify-center space-x-28 p-5">
                        <div>
                            <div className=" w-12 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z" /></svg>
                            </div>
                            <div className="text-sm font-semibold">Effect Booking</div>
                        </div>
                        <div>
                            <div className="w-12 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M160-120q-33 0-56.5-23.5T80-200v-200q0-33 23.5-56.5T160-480h200q0 50 35 85t85 35q50 0 85-35t35-85h200q33 0 56.5 23.5T880-400v200q0 33-23.5 56.5T800-120H160Zm0-80h640v-200H664q-25 55-74.5 87.5T480-280q-60 0-109.5-32.5T296-400H160v200Zm544-328-56-56 142-142 56 56-142 142Zm-448 0L114-670l56-56 142 142-56 56Zm184-112v-200h80v200h-80ZM160-200h640-640Z" /></svg>
                            </div>
                            <div className="text-sm font-semibold">Real-time Notification</div>
                        </div>
                        <div>
                            <div className="w-12 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M160-240v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H160Zm400 0v-22q0-45 44-71.5T720-280q72 0 116 26.5t44 71.5v22H560Zm160-160q-33 0-56.5-23.5T640-400q0-33 23.5-56.5T720-480q33 0 56.5 23.5T800-400q0 33-23.5 56.5T720-320Z" /></svg>
                            </div>
                            <div className="text-sm font-semibold"  >Admin Effeciency</div>
                        </div>
                    </div>
                </div>
                {/**classess */}
                <div className="p-5">
                    <Card className="mt-6 w-72 block p-4 rounded-md">
                        <CardHeader>
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img className="rounded-md shadow-xl"
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="card-image"
                                />
                            </CardHeader>
                        </CardHeader>
                        <CardBody className="-mt-7 mb-4">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography>
                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                night life in Barcelona.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pb-5 my-3 inline ">
                            <Button className="py-3 px-5 bg-black rounded-md">Read More</Button>
                        </CardFooter>


                    </Card>
                </div>
            </main>
            {/**footer */}
            <footer>
                <div className="w-full bg-black">
                    <div className="flex justify-evenly">
                        <div className="text-white">d</div>
                        <div className="text-white">b</div>
                    </div>
                    <div className="bg-green-300 p-4">
                        @ 2024 All righs reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;    