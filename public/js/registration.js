"use strict"

import UserRegistrationData from './user_registration_data.mjs';

const registrationFormEl = document.querySelector(".registration-form");

const firstNameInputEl = document.querySelector(".registration-form__input-text_first-name");
const lastNameInputEl = document.querySelector(".registration-form__input-text_last-name");
const phoneNumberInputEl = document.querySelector(".registration-form__input-text_tel");
const emailInputEl = document.querySelector(".registration-form__input-text_email");
const passwordInputEl = document.querySelector(".registration-form__input-text_password");


registrationFormEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    const userRegistrationData = new UserRegistrationData;

    if ( !userRegistrationData.setFirstName(firstNameInputEl.value) ){

    }

    if ( !userRegistrationData.setLastName(lastNameInputEl.value) ){

    }

    if ( !userRegistrationData.setPhoneNumber(phoneNumberInputEl.value) ){

    }

    if ( !userRegistrationData.setEmail(emailInputEl.value) ){

    }

    if ( !userRegistrationData.setPassword(passwordInputEl.value) ){

    }

    console.log(userRegistrationData);
});

