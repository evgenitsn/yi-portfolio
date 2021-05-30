import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  REQUIRED_ERROR_MESSAGE,
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  EMAIL_VALIDATION_PATTERN,
  INVALID_EMAIL_ERROR_MESSAGE,
  FORM_SUBMIT_ERROR_MESSAGE,
  THANKS_MESSAGE,
  FORMSPARK_ACTION_URL,
} from '../../utils/constants';
import { Button } from '../';
import {
  Form,
  LabelContainer,
  Label,
  TextInput,
  Error,
  ErrorContainer,
  ThanksContainer,
  ThanksMessage,
} from './ContactForm.style';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async data => {
    setFormSubmitError(false);
    setFormSubmitting(true);
    try {
      const response = await fetch(FORMSPARK_ACTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setFormSubmitted(true);
        reset();
      } else {
        setFormSubmitError(true);
      }
    } catch (err) {
      setFormSubmitError(true);
    }
    setFormSubmitting(false);
  };

  const isNameValid = errors?.name?.message === undefined;
  const isEmailValid = errors?.email?.message === undefined;
  const isMessageValid = errors?.message?.message === undefined;

  if (formSubmitted && isSubmitted) {
    return (
      <ThanksContainer>
        {/* TODO: Revamp this screen */}
        <ThanksMessage>{THANKS_MESSAGE}</ThanksMessage>
        <Button
          onClick={() => {
            setFormSubmitError(false);
            setFormSubmitted(false);
          }}
        >
          Go back
        </Button>
      </ThanksContainer>
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LabelContainer>
        <Label isValid={isNameValid} htmlFor={'name'}>
          Name
        </Label>
        {!isNameValid && <Error>{errors.name.message}</Error>}
      </LabelContainer>
      <TextInput
        isValid={isNameValid}
        type='text'
        id='name'
        {...register('name', {
          required: REQUIRED_ERROR_MESSAGE,
          maxLength: { value: 40, message: MAX_LENGTH_ERROR_MESSAGE(40) },
          minLength: { value: 2, message: MIN_LENGTH_ERROR_MESSAGE(2) },
        })}
      />
      <LabelContainer>
        <Label isValid={isEmailValid} htmlFor={'email'}>
          Email
        </Label>
        {!isEmailValid && <Error>{errors.email.message}</Error>}
      </LabelContainer>
      <TextInput
        isValid={isEmailValid}
        type='text'
        id='email'
        {...register('email', {
          required: REQUIRED_ERROR_MESSAGE,
          pattern: {
            value: EMAIL_VALIDATION_PATTERN,
            message: INVALID_EMAIL_ERROR_MESSAGE,
          },
        })}
      />
      <LabelContainer>
        <Label isValid={isMessageValid} htmlFor={'message'}>
          Message
        </Label>
        {!isMessageValid && <Error>{errors.message.message}</Error>}
      </LabelContainer>
      <TextInput
        isValid={isMessageValid}
        id='message'
        as='textarea'
        rows={6}
        {...register('message', {
          required: REQUIRED_ERROR_MESSAGE,
          minLength: { value: 12, message: MIN_LENGTH_ERROR_MESSAGE(12) },
        })}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          style={{ width: '100%' }}
          type='submit'
          disabled={formSubmitting}
        >
          {formSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </div>
      {formSubmitError && (
        <ErrorContainer>
          <Error>{FORM_SUBMIT_ERROR_MESSAGE}</Error>
        </ErrorContainer>
      )}
    </Form>
  );
};

export default ContactForm;
