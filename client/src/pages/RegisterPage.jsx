import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    
    function registerUser(ev) { 
        ev.preventDefault();
        if (password === confirmPassword ) { //check if email is already in use
            axios.post('/register', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
        else {
            alert("Passwords do not match");
        }
    }
    return (
        <div className="mt-4 p-10 grow flex justify-around items-center">
            <div className="mb-44">
                <h1 className="text-3xl mb-10 text-center">Welcome to noyanbnb!</h1>
                <form className="max-w-md mx-auto  " onSubmit={registerUser}>
                    <div className="divide-y mb-2 outline outline-1 outline-gray-300 rounded-xl ">
                        <div className="flex flex-row divide-x w-full">
                            <input className="p-2 w-1/2" type="text" placeholder="First Name" 
                                value={firstName} 
                                onChange={ev => setFirstName(ev.target.value)}/>
                            <input className="p-2 w-1/2" type="text" placeholder="Last Name"
                                value={lastName}
                                onChange={ev => setLastName(ev.target.value)} />
                        </div>                        
                        <input className="p-2" type="text" placeholder="Email"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}  />                        
                        <input className="p-2" type="password" placeholder="Password" 
                            value={password}
                            onChange={ev => setPassword(ev.target.value)} />
                        <input className="p-2" type="password" placeholder="Confirm Password" 
                            value={confirmPassword}
                            onChange={ev => setConfirmPassword(ev.target.value)} />
                    </div>                    
                    <button className="p-2 register" type="submit">Register</button>
                    <div className="text-center mt-4 font-semibold text-gray-500 ">
                        Have an account? <Link className="hover:border-b-2 underline text-black hover:text-[#f5385d] " to={'/login'}>Login now!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
