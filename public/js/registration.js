"use strict"

import UserRegistrationData from './user_registration_data.mjs';

const registrationFormEl = document.querySelector(".registration-form");

const firstNameInputEl = document.querySelector(".registration-form__input-text_first-name");
const lastNameInputEl = document.querySelector(".registration-form__input-text_last-name");
const phoneNumberInputEl = document.querySelector(".registration-form__input-text_tel");
const emailInputEl = document.querySelector(".registration-form__input-text_email");
const passwordInputEl = document.querySelector(".registration-form__input-text_password");

const firstNameInputValidationHint = tippy(firstNameInputEl, {
    content: 'First name can contain only Latin or Cyrillic characters, \' . -, and have a total length of 2 to 30 characters.',
    trigger: 'manual',
});

const lastNameInputValidationHint = tippy(lastNameInputEl, {
    content: 'Last name can contain only Latin or Cyrillic characters, \' . -, and have a total length of 2 to 30 characters.',
    trigger: 'manual',
});

const phoneNumberInputValidationHint = tippy(phoneNumberInputEl, {
    content: 'Phone number must be formatted as +7(xxx)xxx-xxxx, where x is 0-9 digit.',
    trigger: 'manual',
});

const emailInputValidationHint = tippy(emailInputEl, {
    content: 'Email must be a valid email address.',
    trigger: 'manual',
});

const passwordInputValidationHint = tippy(passwordInputEl, {
    content: 'Password must be at least 8 characters long and contain Latin characters in upper and low case and digits.',
    trigger: 'manual',
});

registrationFormEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    const userRegistrationData = new UserRegistrationData;

    if ( !userRegistrationData.setFirstName(firstNameInputEl.value) ){
        firstNameInputValidationHint.show();
        return;
    }

    if ( !userRegistrationData.setLastName(lastNameInputEl.value) ){
        lastNameInputValidationHint.show();
        return;
    }

    if ( !userRegistrationData.setPhoneNumber(phoneNumberInputEl.value) ){
        phoneNumberInputValidationHint.show();
        return;
    }

    if ( !userRegistrationData.setEmail(emailInputEl.value) ){
        emailInputValidationHint.show();
        return;
    }

    if ( !userRegistrationData.setPassword(passwordInputEl.value) ){
        passwordInputValidationHint.show();
        return;
    }

    // TODO выполнить регистрацию пользователя
    console.log(userRegistrationData.getJson());
});

