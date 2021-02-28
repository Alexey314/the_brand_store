"use strict"

/**
 * Представляет регистрационную информацию пользователя. Реализует валидацию. По умолчанию поддерживает латинские и
 * кириллические буквы. */
export default class UserRegistrationData{
    _firstName = "";
    _lastName = "";
    _phoneNumber = "";
    _email = "";
    _password = "";
    _isValid = false;

    /**
     * Инициализирует новый объект UserRegistrationData с заданным или дефолтным набором regexp для валидации
     * передаваемых значений пользовательских данных.
     * @param {object} [{
            [firstNameRe]: regexp,
            [lastNameRe]: regexp,
            [phoneNumberRe]: regexp,
            [emailRe]: regexp,
            [passwordRe]: regexp
        }]
     */
    constructor(
        {
            firstNameRe,
            lastNameRe,
            phoneNumberRe,
            emailRe,
            passwordRe
        } = {
            firstNameRe: /^[a-zA-Zа-яА-Я '.-]{2,30}$/,
            lastNameRe: /^[a-zA-Zа-яА-Я '.-]{2,30}$/,
            phoneNumberRe: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            emailRe: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, //W3C recommends
            passwordRe: /^$/
        }) {
        this._firstNameRe = firstNameRe;
        this._lastNameRe = lastNameRe;
        this._phoneNumberRe = phoneNumberRe;
        this._emailRe = emailRe;
        this._passwordRe = passwordRe;
    }

    /**
     * Проверяет имя пользователя. При успешной валидации возвращает true и запоминает значение.
     * @param {string} value
     * @return {boolean}
     * */
    setFirstName(value) {
        const trimmedVal = value.trim();
        if (this._firstNameRe.test(trimmedVal)){
            this._firstName = trimmedVal;
            return true;
        }
        return false;
    }

    /**
     * Проверяет фамилию пользователя. При успешной валидации возвращает true и запоминает значение.
     * @param {string} value
     * @return {boolean}
     * */
    setLastName(value) {
        const trimmedVal = value.trim();
        if (this._lastNameRe.test(trimmedVal)){
            this._lastName = trimmedVal;
            return true;
        }
        return false;
    }

    /**
     * Проверяет телефон пользователя. При успешной валидации возвращает true и запоминает значение.
     * @param {string} value
     * @return {boolean}
     * */
    setPhoneNumber(value) {
        // Убираем все пробелы
        const normalizedVal = value.replace(/ +/g, "");
        if (this._phoneNumberRe.test(normalizedVal)){
            this._phoneNumber = normalizedVal;
            return true;
        }
        return false;
    }

    /**
     * Проверяет email пользователя. При успешной валидации возвращает true и запоминает значение.
     * @param {string} value
     * @return {boolean}
     * */
    setEmail(value) {
        // Убираем все пробелы
        const normalizedVal = value.replace(/ +/g, "");
        if (this._emailRe.test(normalizedVal)){
            this._email = normalizedVal;
            return true;
        }
        return false;
    }

    /**
     * Проверяет пароль пользователя. При успешной валидации возвращает true и запоминает значение.
     * @param {string} value
     * @return {boolean}
     * */
    setPassword(value) {
        if (this._passwordRe.test(value)){
            this._password = value;
            return true;
        }
        return false;
    }
}

