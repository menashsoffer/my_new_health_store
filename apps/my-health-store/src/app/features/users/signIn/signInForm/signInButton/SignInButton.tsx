import styles from './SignInButton.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CREATE_USER } from '../../../../../../graphql/mutation';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { createUserAtom } from '../../../atom/userStore';
import { useEffect } from 'react';

interface HasEmptyProps {
  hasEmptyBoolean: boolean;
}

const SignInButton = (props: HasEmptyProps) => {
  const navigate = useNavigate();
  const [createUser] = useAtom(createUserAtom);
  const [createUserFn] = useMutation(CREATE_USER);

  const notify = () =>
    toast.success('your user is created successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const click = () => {
    const {
      firstname,
      lastname,
      email,
      password,
      phonenumber,
      city,
      street,
      postalcode,
    } = createUser;
    const isadmin: boolean = false;
    createUserFn({
      variables: {
        input: {
          clientMutationId: 'menashe',
          user: {
            firstname,
            lastname,
            email,
            isadmin,
            password,
            phonenumber,
            city,
            street,
            postalcode,
          },
        },
      },
    }).then(() => {
      notify();
      setTimeout(() => navigate('/home'), 3000);
    });
  };

  // useEffect(() => {
  //   if (data && data.updateUserByEmail) {
  //     console.log(data);

  //   }
  // }, [data]);

  return (
    <div className={styles['container']}>
      <ToastContainer />
      <div>
        <button
          type="submit"
          disabled={props.hasEmptyBoolean}
          className={
            props.hasEmptyBoolean
              ? 'flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
              : 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          }
          onClick={() => click()}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignInButton;
