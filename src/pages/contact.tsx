import { PageTitle } from '../components';
import { Layout } from '../layout';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// eslint-disable-next-line no-useless-escape
const EMAIL_VALIDATION_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  display: block;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  resize: vertical;
  background-color: ${theme.colors.formBackground};
`;

const Submit = styled.input`
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin: 20px;
  cursor: pointer;
`;

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  return (
    <Layout title='Contact'>
      <PageTitle>Contact</PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type='text'
          placeholder='Name'
          {...register('name', { required: true, maxLength: 40 })}
        />
        <TextInput
          type='text'
          placeholder='Email'
          {...register('email', {
            required: true,
            pattern: EMAIL_VALIDATION_PATTERN,
          })}
        />
        <TextInput
          as='textarea'
          rows={6}
          placeholder='Message'
          {...register('message', { required: true })}
        />
        <Submit type='submit' />
      </Form>
    </Layout>
  );
};

export default Home;
