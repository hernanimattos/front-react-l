import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputForm, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e: any) => {
    setForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleAuth = (event: any) => {
    event.preventDefault();

    console.log(event.target.elements.email.value);
  };
  return (
    <div className='container'>
      <div className='App'>
        <div className='image-login'>image</div>
        <form className='form-login' onSubmit={(event) => handleAuth(event)}>
          <h2>Login</h2>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='e-mail'
            autoComplete='on'
            className='input'
            value={inputForm.email}
            onChange={(e) => changeHandler(e)}
            required
          />
          <input
            id='password'
            name='password'
            type='password'
            placeholder='password'
            autoComplete='off'
            value={inputForm.password}
            onChange={(e) => changeHandler(e)}
          />
          <button type='submit' value='enter'>
            Vai
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
