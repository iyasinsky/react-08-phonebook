import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { FormikForm } from './index.styled';
import { formValidationScheme } from 'helpers/formValidation';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const contactHandler = newContact => {
    const normalizedName = newContact.name.toLowerCase();
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    isContactExist
      ? alert(`${newContact.name} is already in contacts.`)
      : dispatch(addContact(newContact));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={formValidationScheme}
        onSubmit={(values, actions) => {
          contactHandler(values);
          actions.resetForm();
        }}
      >
        <FormikForm>
          <label>
            <div>
              <span>Name</span>
              <Field name="name" placeholder="Enter name" />
            </div>
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            <div>
              <span>Phone</span>
              <Field name="number" placeholder="Enter UA phone number" />
            </div>
            <ErrorMessage name="number" component="p" />
          </label>
          <button type="submit">Add new contact</button>
        </FormikForm>
      </Formik>
    </div>
  );
};
