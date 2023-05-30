import styled from 'styled-components';
import {Form as FormikForm, Field as FormikField, ErrorMessage as FormikError} from 'formik'

export const FormContact = styled.form`
    width: 350px;
    padding: 10px;
    border: 1px solid black;
    
`;
export const Label = styled.label`
    position: relative;
    display: block;
    margin: 0px 0px 20px 0px;
    
`;
export const FieldName = styled.p`
    margin: 15px 0px 0px 0px;
    
`;

export const Form = styled(FormikForm)`
    width: 100%;
    
`
export const Field = styled(FormikField)`
    padding: 10px 20px;
    border-radius: 5px;
    
`

export const ErrorMessage = styled(FormikError)`
    position: absolute;
    left: 60px;
    display: block;
    color: tomato;
`
export const Button = styled.button`
  margin-top: 20px;
  margin-left: auto;
  padding: 15px 40px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

    &:active{
        transform: ${({ disabled }) => (disabled ? 'scale(1)' : 'scale(0.9)')};
        background-color: ${({ disabled }) => (disabled ? '#f44336' : '#f44221')};
    }

    
`
