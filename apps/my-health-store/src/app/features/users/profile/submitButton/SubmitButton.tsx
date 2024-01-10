import styles from './SubmitButton.module.css';
import { useMutation } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserAtom, userAtom } from '../../../../stores/userStore';
import { UPDATE_USER } from '../../../../../graphql/mutation';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function SubmitButton() {
  const navigate = useNavigate();
  const [updateUser] = useAtom(updateUserAtom);
  const [user] = useAtom(userAtom);
  const [updateUserFn, { data }] = useMutation(UPDATE_USER);

  const notify = () =>
    toast.success('your user is updated successfully!', {
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
    } = updateUser;
    updateUserFn({
      variables: {
        input: {
          clientMutationId: 'menashe',
          userPatch: {
            id: user.id,
            firstname,
            lastname,
            email,
            password,
            phonenumber,
            city,
            street,
            postalcode,
          },
          email: user.email,
        },
      },
    });
  };
  useEffect(() => {
    if (data && data.updateUserByEmail) {
      console.log(data);
      notify();
      setTimeout(() => navigate('/home'), 3000);
    }
  }, [data]);

  return (
    <div className={styles['container']}>
      <ToastContainer />
      <div>
        <button
          type="button"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => click()}
        >
          Save changes
        </button>
      </div>
    </div>
  );
}

export default SubmitButton;
