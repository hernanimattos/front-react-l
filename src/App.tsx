import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';

function App() {
  const [inputForm, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e: any) => {
    setForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: any) => {
    console.log(inputForm);
    event.preventDefault();
  };
  return (
    <div className='container'>
      <div className='App'>
        <div className='image-login'>image</div>

        <Form handleSubmit={handleSubmit}>
          <Input
            name='email'
            status='valid'
            type='text'
            onChange={(e) => changeHandler(e)}
          />
          <Input
            name='password'
            status='valid'
            type='password'
            onChange={(e) => changeHandler(e)}
          />
          <Button>vai </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
