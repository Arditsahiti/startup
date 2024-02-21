import React, { useState } from "react";
import axios from 'axios'; // You need to install axios: npm install axios

function LogInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Here you would typically send the user's credentials to your server
        const response = await axios.post('http://localhost:3001', { email, password });
        if (response.data.success) {
            // If the login was successful, redirect the user to the dashboard
            window.location.href = '/dashboard';
        } else {
            // If there was an error, show it to the user
            alert(response.data.message);
        }
    };

    return (
      <div className="halo mb-4">
        <form
          className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-2xl"
          onSubmit={handleSubmit}
        >
          <h1>Log In:</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <div className="">
              <input
                id="email"
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <div className="">
              <input
                id="password"
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="buton">
            Log In
          </button>
        </form>
      </div>
    );
}

export default LogInForm;