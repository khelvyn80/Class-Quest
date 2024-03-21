import { useNavigate } from "react-router-dom";
import UserHomePage from "./userHomePage";
import UserApproval from "./userApproval";
import { useState } from "react";
const UserPage = () => {
    const [todash, setToDash] = useState(true);
    const [toapprov, setToApprov] = useState(false);
    const navigator = useNavigate();
    function logout() {
        navigator('/')
    }

    function toDashboard() {
        console.log('button click')
        setToDash(true)
        setToApprov(false)
    }

    function toApproval() {
        setToDash(false)
        setToApprov(true)
    }
    return (
        <div className="h-dvh bg-red-00 relative">
            {/* navigation*
            <header className="h-10 z-50 fixed  top-0 left-0 right-0 bg-gray-300 w-full">

                <nav className="p-2 z-50 flex justify-between border-b shadow">
                    <div className="text-red ">
                        <div>Logo Name</div>
                    </div>

                    <div>
                        <a onClick={logout} className="hover:border hover:rounded-md hover:p-1 hover:border-black cursor-pointer">Logout</a>
                    </div>
                </nav>
    </header>*/}

            {/**main */}
            <main className="flex">

                <dvi className="h-dvh w-60 bg-yellow-200 pt-4  flex flex-col justify-between  border-r-2 rounded-r-2xl border-white  fixed">
                    <div className=" w-full ">
                        <div className="items-center" >
                            Logo
                        </div>
                        <div className="text-center">
                            Name
                        </div>

                    </div>
                    <div className="mb-96 space-y-2">
                        <div className="w-full p-3 text-center cursor-pointer hover:text-gray-400" onClick={toDashboard} style={{ borderLeft: todash == true ? '3px solid white' : 'none' }}>
                            Dashboard
                        </div>
                        <div className="w-full p-3 text-center cursor-pointer hover:text-gray-400" onClick={toApproval} style={{ borderLeft: toapprov == true ? '3px solid white' : 'none' }}>
                            Approval
                        </div>
                    </div>
                    <div className="bg-green-200 space-y-2">
                        <div onClick={logout} className="-mt-24 p-2 border w-32 m-auto text-center rounded-lg cursor-pointer hover:border-white">Logout</div>
                        <div className="text-xs text-center">Johnny Doe</div>
                    </div>
                </dvi>
                <div className="h-dvh ml-2 bg-red-200 w-full pt-14 pl-64 border border-black overflow-y-auto">
                    {todash && <div>
                        <UserHomePage />
                    </div>}
                    {toapprov && <div>
                        <UserApproval />
                    </div>}
                </div>
            </main>
        </div>
    );
}

export default UserPage;