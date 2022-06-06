import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Toast from './components/Toast/Toast';
import loja from './images/loja.png';

const AUTH_USER = gql`
  mutation AuthUser($input: Auth) {
    authUser(input: $input) {
      token
      description {
        error
        blocked
        message
        status
      }
    }
  }
`;

function App() {
  const [authUser, { loading, error, data }] = useMutation(AUTH_USER);

  const { authUser: response } = data || { authUser: {} };
  const { description, token } = response || { description: {} };
  const {
    blocked,
    error: authError,
    status,
    message,
  } = description || { blocked: false, error: false, status: '', message: '' };
  const [inputForm, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e: any) => {
    setForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(loading);
    authUser({ variables: { input: inputForm } });
  };
  return (
    <div className='container'>
      <div className='App'>
        <div className='image-login'>
          <img src={loja} alt='' />
        </div>

        <Form className='form-login' handleSubmit={handleSubmit}>
          <Input
            name='email'
            type='text'
            onChange={(e) => changeHandler(e)}
            status={status}
          />
          <Input
            name='password'
            type='password'
            onChange={(e) => changeHandler(e)}
            status={status}
          />
          <Button loading={loading} disabled={loading}>
            Enviar
          </Button>
          <Toast show={authError} message={`${message}`} status={status} />
        </Form>
      </div>
    </div>
  );
}

export default App;
