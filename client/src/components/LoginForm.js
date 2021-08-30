import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", id: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (
                    <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group">
                    <lable htmlFor="name">ID:</lable>
                    <input type="number" name="id" id="id" onChange={e => setDetails({ ...details, id: e.target.value })} value={details.id} />
                </div>
                <div className="form-group">
                    <lable htmlFor="password">Password:</lable>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;
