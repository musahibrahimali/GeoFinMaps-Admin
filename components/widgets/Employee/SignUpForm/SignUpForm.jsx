
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
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
import { SignUpFormStyles } from './SignUpFormStyles';

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
];

const initialValues = {
    id: 0,
    fullName: '',
    emailAddress: '',
    password: '',
    confpassword: '',
    phoneNumber: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
};

function SignUpForm() {
    const styles = SignUpFormStyles();
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const router = useRouter();

    const handlePasswordVisible = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    const handleConfirmPasswordVisible = (event) => {
        event.preventDefault();
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    const handleSignUP = async (event) => {
        event.preventDefault();
        let userDepartment = "";
        if (departmentId === "1") {
            department = "Development"
        }
        if (departmentId === "2") {
            department = "Marketting"
        }
        if (departmentId === "3") {
            department = "Accounting"
        }
        if (departmentId === "4") {
            department = "Human Resource"
        }

        await firebase.auth()
            .createUserWithEmailAndPassword(
                values.emailAddress, values.password
            )
            .then((auth) => {
                if (auth) {
                    database.collection('admins').add({
                        userName: values.fullName,
                        userEmail: values.emailAddress,
                        phone: values.phoneNumber,
                        gender: values.gender,
                        city: values.city,
                        isPermanent: values.isPermanent,
                        department: userDepartment,
                    });
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
                    case "auth/email-already-in-use":
                        setErrorMessage("Email in use by another account");
                        break;
                    case "auth/weak-password":
                        setErrorMessage("Password must be at least 8 characters");
                        break;
                    default:
                        setErrorMessage("A network error occured");
                        break;
                }
            })
    }


    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('fullName' in fieldValues) {
            temp.fullName = fieldValues.fullName ? "" : "This Field is Required";
        }
        if ('emailAddress' in fieldValues) {
            temp.emailAddress = (/$^|.+@.+..+/).test(fieldValues.emailAddress) ? "" : "Invalid Email";
        }
        if ('password' in fieldValues) {
            temp.password = fieldValues.password.length >= 8 ? "" : "Invalid Password (password must be at least 8 characters)";
        }
        if ('confpassword' in fieldValues) {
            temp.confpassword = fieldValues.confpassword.length >= 8 ? "" : "Passwords do not match";
        }
        if ('phoneNumber' in fieldValues) {
            temp.phoneNumber = fieldValues.phoneNumber.length > 9 ? "" : "Invalid Phone Number";
        }
        if ('departmentId' in fieldValues) {
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This Field is Required";
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
            handleSignUP();
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
        <div className="mt-8">
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1">
                        <Grid item className="md:col-span-2">
                            <InputField
                                required
                                label="Full Name"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                                error={errors.fullName}
                                inputIcon={<PersonIcon />}
                            />
                            <InputField
                                required
                                label="Email Address"
                                name="emailAddress"
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
                            <InputField
                                required
                                label="Confirm Pasword"
                                name="confpassword"
                                type={confirmPasswordVisible ? "text" : "password"}
                                value={values.confpassword}
                                onChange={handleInputChange}
                                error={errors.confpassword}
                                inputIcon={<VpnKeyIcon />}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onMouseDown={handleConfirmPasswordVisible}
                                        >
                                            {confirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <InputField
                                required
                                label="Phone Number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleInputChange}
                                error={errors.phoneNumber}
                                inputIcon={<CallIcon />}
                            />
                            <InputField
                                required
                                label="City"
                                name="city"
                                value={values.city}
                                onChange={handleInputChange}
                                inputIcon={<LocationCityIcon />}
                            />
                        </Grid>

                        <Grid item className="md:col-span-2">
                            <RadioControls
                                required
                                name="gender"
                                label="Gender"
                                value={values.gender}
                                items={genderItems}
                                onChange={handleInputChange}
                            />
                            <DropDown
                                required
                                name="departmentId"
                                label="Department"
                                value={values.departmentId}
                                options={employeeService.getDepartmentCollection()}
                                onChange={handleInputChange}
                                error={errors.departmentId}
                            />

                            <DatePicker
                                required
                                name="hireDate"
                                label="Hire Date"
                                value={values.hireDate}
                                onChange={handleInputChange}
                            />

                            <CheckBox
                                name="isPermanent"
                                label="Permanent Employee"
                                value={values.isPermanent}
                                onChange={handleInputChange}
                            />
                            <div className={styles.mainContainer}>
                                <FormButton
                                    type="submit"
                                    text="Register"
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
                    </div>
                </Grid>

                <div className="flex flex-row justify-center items-center">
                    <p className="text-red-500 dark:text-red-700">
                        {errorMessage}
                    </p>
                </div>

            </Form>
        </div>
    )
}

export default SignUpForm;
