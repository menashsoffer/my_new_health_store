export const changeHandler = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setForm: (
    value: React.SetStateAction<{
      name: string;
      image_src: string;
      description: string;
    }>,
  ) => void,
  form: {
    name: string;
    image_src: string;
    description: string;
  },
) => {
  setForm({ ...form, [event.target.name]: event.target.value });
};
