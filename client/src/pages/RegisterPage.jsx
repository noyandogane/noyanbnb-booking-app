import { Link } from "react-router-dom";
import { useState } from "react";
 
export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div className="mt-4 p-10 grow flex justify-around items-center">
            <div className="mb-44">
                <h1 className="text-3xl mb-10 text-center">Welcome to noyanbnb!</h1>
                <form className="max-w-md mx-auto  ">
                    <div className="divide-y mb-2 outline outline-1 outline-gray-300 rounded-xl ">
                        <div className="flex flex-row divide-x w-full">
                            <input className="p-2 w-1/2" type="text" placeholder="First Name" />
                            <input className="p-2 w-1/2" type="text" placeholder="Last Name" />
                        </div>                        
                        <input className="p-2" type="text" placeholder="Email" />                        
                        <input className="p-2" type="password" placeholder="Password" />
                        <input className="p-2" type="password" placeholder="Confirm Password" />
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