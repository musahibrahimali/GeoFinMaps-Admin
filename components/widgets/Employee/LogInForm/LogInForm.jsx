import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useStateValue } from '../../../../provider/StateProvider';
import {
    UseForm,
    Form,
    InputField,
    FormButton,
} from '../../FormControls/controls';
import { LogInFormStyles } from './LogInFormStyles';

const initialValues = {
    id: 0,
    emailAddress: '',
    password: '',
};

function LogInForm() {
    const styles = LogInFormStyles();
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [dispatch] = useStateValue();

    const router = useRouter();

    const handlePasswordVisible = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

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

    const handleLogIn = async (event) => {
        event.preventDefault();
        await firebase.auth()
            .signInWithEmailAndPassword(
                values.emailAddress, values.password
            )
            .then((auth) => {
                if (auth) {
                    dispatch({
                        type: "SET_USER",
                        user: auth,
                    });
                    router.replace('/');
                }
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        setErrorMessage("Invalid Email");
                        break;
                    case "auth/user-disabled":
                        setErrorMessage("Account has been disabled");
                        break;
                    case "auth/user-not-found":
                        setErrorMessage("User not found");
                        break;
                    case "auth/wrong-password":
                        setErrorMessage("Invalid password");
                        break;
                    default:
                        setErrorMessage("A network error occured");
                        break;
                }
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            handleLogIn();
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
                            required
                            label="Email Address"
                            name="emailAddress"
                            type="email"
                            value={values.emailAddress}
                            onChange={handleInputChange}
                            error={errors.emailAddress}
                            inputIcon={<EmailIcon />}
                        />
                        <InputField
                            required
                            label="Password"
                            name="password"
                            type={passwordVisible ? "text" : "password"}
                            value={values.password}
                            onChange={handleInputChange}
                            error={errors.password}
                            inputIcon={<VpnKeyIcon />}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onMouseDown={handlePasswordVisible}
                                    >
                                        {passwordVisible ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
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
                <div className="flex flex-row justify-center items-center">
                    <p className="text-red-500 dark:text-red-700">
                        {errorMessage}
                    </p>
                </div>
            </Form>
        </>
    )
}

export default LogInForm;
