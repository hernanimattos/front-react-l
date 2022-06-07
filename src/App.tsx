import { useMutation, gql } from '@apollo/client';
import React, { useCallback, useState } from 'react';
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
  const [authUser, { loading, data }] = useMutation(AUTH_USER);

  const { authUser: response } = data || { authUser: {} };
  let { description } = response || { description: {} };
  const {
    error: authError,
    status,
    message,
  } = description || { blocked: false, error: false, status: '', message: '' };
  const [inputForm, setForm] = useState({
    email: '',
    password: '',
  });
  const [validate, setValidate] = useState({
    message: '',
    error: false,
    status: '',
  });

  const changeHandler = (e: any) => {
    setForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const validateForm = useCallback(() => {
    setValidate({
      message: 'Preencha os campo email e password',
      error: true,
      status: 'error',
    });
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (inputForm.email.length === 0 && inputForm.password.length === 0) {
      return validateForm();
    }
    setValidate({
      message: '',
      error: false,
      status: '',
    });

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
            status={status || validate.status}
          />
          <Input
            name='password'
            type='password'
            onChange={(e) => changeHandler(e)}
            status={status || validate.status}
          />
          <Button loading={loading} disabled={loading}>
            Enviar
          </Button>
          <Toast show={authError} message={message} status={status} />
          <Toast
            show={validate.error}
            message={validate.message}
            status={validate.status}
          />
        </Form>
      </div>
    </div>
  );
}

export default App;
