import React from 'react';
import { Grid } from '@material-ui/core';
import * as employeeService from '../../../../Services/EmployeeService';
import {
    UseForm,
    Form,
    InputField,
    RadioControls,
    DropDown,
    CheckBox,
    DatePicker,
    FormButton,
} from '../../FormControls/controls';
import { LogInFormStyles } from './LogInFormStyles';

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
];

const initialValues = {
    id: 0,
    emailAddress: '',
    password: '',
};

function LogInForm() {
    const styles = LogInFormStyles();

    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? "" : "Invalid Password";
        }

        if ('emailAddress' in fieldValues) {
            temp.emailAddress = fieldValues.emailAddress ? "" : "This Field is Required";
        }

        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            window.alert("working so far so good");
        }
    }

    const {
        values,
        setErrors,
        handleInputChange,
        handleResetForm,
        errors,
        // eslint-disable-next-line no-unused-vars
        setValues,
    } = UseForm(initialValues, true, validateForm);


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12} className="flex flex-col justify-center items-center w-96">
                        <InputField
                            label="Email Address"
                            name="emailAddress"
                            type="email"
                            value={values.emailAddress}
                            onChange={handleInputChange}
                            error={errors.emailAddress}
                        />
                        <InputField
                            label="Password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleInputChange}
                            error={errors.password}
                        />
                        <div className={styles.mainContainer}>
                            <FormButton
                                type="submit"
                                text="Log In"
                            />
                            <FormButton
                                variant="outlined"
                                color="secondary"
                                size="large"
                                text="Reset"
                                onClick={handleResetForm}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}

export default LogInForm;
