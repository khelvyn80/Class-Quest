
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogIn = () => {

    const navigator = useNavigate();


    //form fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //form fields erros
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    function home() {
        navigator('/');
    }


    function submitForm(e) {
        e.preventDefault();
        //console.error("form clicked")
        setUserNameError(null);
        setPasswordError(null);

        

        if (username == "") {
            setUserNameError("enter username")
        }



        if (password == "")
            setPasswordError("enter password")


    }

    function signUp() {
            navigator('/logon')
    }
    return (<div>
        <div className="h-dv">
            {/* navigation*/}
            <header>

                <nav className="p-2 flex justify-between">
                    <div className="text-red">
                        <div>Logo Name</div>
                    </div>

                    <div>
                        <a onClick={home} className="hover:border hover:rounded-md hover:p-1 hover:border-black cursor-pointer">Home</a>
                    </div>
                </nav>
            </header>
            {/*Main */}
            <main>
                <div className="w-96 rounded-md mx-auto mt-20 border shadow-md">
                    <form onSubmit={submitForm} className="p-5 space-y-2">
                        <label htmlFor="username" className="block">Username</label>
                        <input type="text" className="block border w-full rounded-md p-1 outline-none focus:border-blue-400" value={username} onChange={(e) => {
                            let value = e.target.value;
                            setUsername(value)
                        }} />
                        {userNameError && <p className="text-red-500 text-xs">{userNameError}</p>}
                       
                        <label htmlFor="password" className="block " >Password</label>

                        <input type="text" className="block border w-full rounded-md p-1 outline-none focus:border-blue-400" value={password} onChange={(e) => {
                            let value = e.target.value;
                            setPassword(value)
                        }} />
                        {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}

                        <button className="w-full bg-blue-400 p-1 rounded-md">Submit</button>
                        <p className="text-sm w-full text-center">Do not have an account? <span className="text-blue-500 cursor-pointer text-xs" onClick={signUp}>Sign up</span></p>
                    </form>
                </div>
            </main>

            {/**footer */}
            <footer>

            </footer>

        </div>

    </div>);
}

export default LogIn;