import React  from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Label, Form, FieldName, Field, ErrorMessage, Button } from "./ShoppingForm.styled";

import { Formik, } from "formik";
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/ , 'Перейди на англійську').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().min(10, 'Too Short!').max(19, 'Too Long!').matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Невірний формат').required('Required'),
    address: Yup.string().min(10, 'Too Short!').required('Required'),
  });

export const ShoppingFormik = ({onSubmit, isdisabled }) => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                address: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                onSubmit({
                    ...values,
                    id: nanoid(),
                });
                actions.resetForm();
            }}
            >
            <Form >
                <Label>
                    <FieldName> Name </FieldName> 
                    <Field
                    placeholder="Jane Doe"
                    type="text"
                    name="name"
                    />
                    <ErrorMessage name="name" component='span'/>
                </Label>

                <Label>
                    <FieldName> Email </FieldName> 
                    <Field
                    placeholder="JaneDoe@ukr.net"
                    type="text"
                    name="email"
                    />
                    <ErrorMessage name="email" component='span'/>
                </Label>

                <Label>
                    <FieldName> Phone </FieldName>
                    <Field
                    placeholder="000-000-00-00"
                    type="tel"
                    name="phone"
                    />
                    <ErrorMessage name="phone" component='span'/>
                </Label>

                <Label>
                    <FieldName> Address </FieldName> 
                    <Field
                    placeholder="Kyiv, Khreschatyk street, home 8, apartment 1"
                    type="text"
                    name="address"
                    />
                    <ErrorMessage name="address" component='span'/>
                </Label>
                    
                
                
                <Button type="submit" disabled={isdisabled}>Submit</Button>
            </Form>
        </Formik>
    )
}

PropTypes.ContactForm = {
    onSubmit: PropTypes.func.isRequired, 
};
