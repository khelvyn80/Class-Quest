import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Logon = () => {

    const navigator = useNavigate();


    //form fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    //form fields erros
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    function home() {
        navigator('/');
    }


    const  submitForm = async (e) => {
        e.preventDefault();
        //console.error("form clicked")
        setUserNameError(null);
        setPasswordError(null);
        setEmailError(null)

        

        if (username == "") {
            setUserNameError("enter username")
            return
        }

        
        if (email == ""){
            setEmailError("enter email")
            return
        }else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
            setEmailError("enter valid email")
            return
        }
        if (password == ""){
            setPasswordError("enter password")
            return
        }else if(password.length < 6){
            setPasswordError("password should at least six characters")
            return
        }


        try {
            const data = {"username": username, "email" : email, "password" : password}
            const response = await fetch('http://localhost:4000/api/user/', {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            
            if(response.ok){
                const responseResult = await response.json();
            }else{
                console.log(response.status);
                console.log(response.text)
            }
        } catch (error) {
            console.log(error)
        }

        
        

    }

    function signIn() {
        navigator('/login')
}


    return (
        <div>

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
                        <form onSubmit={submitForm} className="p-5 space-y-2" >
                            <label htmlFor="username" className="block">Username</label>
                            <input type="text" className="block border w-full rounded-md p-1 outline-none focus:border-blue-400" value={username} onChange={(e) => {
                                let value = e.target.value;
                                setUsername(value)
                            }} />
                            {userNameError && <p className="text-red-500 text-xs">{userNameError}</p>}
                            <label htmlFor="email" className="block">Email</label>

                            <input type="text" className="block border w-full rounded-md p-1 outline-none focus:border-blue-400" value={email} onChange={(e) => {
                                let value = e.target.value;
                                setEmail(value)
                            }} />
                            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
                            <label htmlFor="password" className="block">Password</label>

                            <input type="text" className="block border w-full rounded-md p-1 outline-none focus:border-blue-400 " value={password} onChange={(e) => {
                                let value = e.target.value;
                                setPassword(value)
                            }} />
                            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}

                            <button className="w-full bg-blue-400 p-1 rounded-md" >Submit</button>
                            <p className="text-sm w-full text-center" >Already have an account? <span className="text-blue-500 cursor-pointer text-xs " onClick={signIn}>Sign in</span></p>
                        </form>
                    </div>
                </main>

                {/**footer */}
                <footer>

                </footer>

            </div>

        </div>
    );
}

export default Logon;