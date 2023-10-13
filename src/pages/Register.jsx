import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

export const action = async () => {
  return null;
};

const Register = () => {
  return (
    <section className='h-screen grid place-content-center'>
      <Form
        method='post'
        className='card w-96 sm:w-[600px] p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>
        <p className='text-center'>
          Already a member?
          <Link to='/login' className='ml-2 link-hover link-primary capitalize'>
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
