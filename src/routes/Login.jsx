import React, { useState } from "react";
import { BookOpenText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');

        if(!email || !password){
           return setError("Please input all fields");
        }
        if(password.length < 6){
            return setError("Password must contain atleast 6 characters");
        }
        try{
            setLoading(true);
            await login(email, password);
            navigate("/dashboard");
        }catch(err){
            setError('Failed to login: ' + (err.message || "Please try again"));
        }finally{
            setLoading(false);
        }
    }
    return(
        
        <>
        <div className="flex items-center gap-4 mt-8 ml-4 sm:ml-8 md:ml-16 lg:ml-64">
  <BookOpenText className="w-6 h-6" />
  <p className="font-bold text-lg sm:text-xl">LearnFlow</p>
</div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-5xl mx-auto mt-10 gap-8 px-4">
  
  {/* Form Section */}
  
  <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-1/2">
    <div className="flex flex-col  mb-6">
      <h2 className=" ">Welcome!</h2>
      <p className="font-semibold text-xl mb-6">Sign in</p>
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username:</label>
          <input 
            type="text"
            id="username"
            value={username}
            placeholder="username"
            onChange={(e)=>setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
          <input 
            type="password"
            id="password"
            value={password}
            placeholder="*********"
            onChange={(e)=>setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <button 
          className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:border-[2px] hover:border-black hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4" 
          type="submit" 
          disabled={loading}
        >
          {loading ? "logging in..." : "Sign In"}
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-black font-bold">Register</Link></p>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img 
      src="/src/assets/small-team.png" 
      alt="Small Team" 
      className="w-full max-w-md rounded-lg object-cover"
    />
  </div>
</div>

        </>
    )
}
export default Login;