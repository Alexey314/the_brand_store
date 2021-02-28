"use strict"

import UserRegistrationData from './user_registration_data.mjs';

const userRegData = new UserRegistrationData;

const test = (obj, method, methodArg, validFnResult) => {
    const result = obj[method](methodArg);
    if (result === validFnResult){
        console.log(`${method}('${methodArg}') =`, `${result} as expected`);
    }else{
        console.error(`${method}('${methodArg}') =`, `${result} instead of ${validFnResult}`);
    }
};

test(userRegData,"setFirstName", "J", false);
test(userRegData,"setFirstName", "Jooooooooooooooooooooooooooooooooooooooooohn", false);
test(userRegData,"setFirstName", "John", true);
test(userRegData,"setFirstName", " john ", true);
test(userRegData,"setFirstName", "Joh3n", false);
test(userRegData,"setFirstName", "Иван", true);
test(userRegData,"setFirstName", " иван ", true);
test(userRegData,"setFirstName", "Ива,н", false);
test(userRegData,"setFirstName", "Jean-Pierre", true);
test(userRegData,"setFirstName", "Jean-Pierre", true);
test(userRegData,"setFirstName", "Мар'яна", true);
test(userRegData,"setFirstName", "pedro alberto", true);
test(userRegData,"setFirstName", "John M.", true);

