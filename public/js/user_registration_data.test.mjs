"use strict"

import UserRegistrationData from "./user_registration_data.mjs";
import { assert } from "chai";

describe("User first name validation", () => {
    it("Should reject empty value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName(""), false);
        assert.equal(uut.setFirstName(" "), false);
    });
    
    it("Should reject one letter value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("J"), false);
        assert.equal(uut.setFirstName(" a "), false);
    });

    it("Should reject too long value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("Jooooooooooooooooooooooooooooooooooooooooohn"), false);
    });

    it("Should accept single word value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("John"), true);
        assert.equal(uut.setFirstName("Иван"), true);
        assert.equal(uut.setFirstName("john"), true);
        assert.equal(uut.setFirstName("иван"), true);
    });

    it("Should accept valid value with leading and/or trailing spaces", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName(" john "), true);
        assert.equal(uut.setFirstName(" иван "), true);
    });

    it("Should accept multi words value with delimiters", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("Jean-Pierre"), true);
        assert.equal(uut.setFirstName("Мар'яна"), true);
        assert.equal(uut.setFirstName("pedro alberto"), true);
        assert.equal(uut.setFirstName("John M."), true);
    });

    it("Should reject value with unwanted symbols", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("Joh3n"), false);
        assert.equal(uut.setFirstName("Ива,н"), false);
    });
});

describe("User last name validation", () => {
    it("Should reject empty value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName(""), false);
        assert.equal(uut.setLastName(" "), false);
    });

    it("Should reject one letter value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("S"), false);
        assert.equal(uut.setLastName(" d "), false);
    });

    it("Should reject too long value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("Smmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmit"), false);
    });

    it("Should accept single word value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("Smith"), true);
        assert.equal(uut.setLastName("Петров"), true);
        assert.equal(uut.setLastName("smith"), true);
        assert.equal(uut.setLastName("петров"), true);
    });

    it("Should accept valid value with leading and/or trailing spaces", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName(" Smith "), true);
        assert.equal(uut.setLastName(" Петров "), true);
    });

    it("Should accept multi words value with delimiters", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("Римский-Корсаков"), true);
        assert.equal(uut.setLastName("O'Reilly"), true);
        assert.equal(uut.setLastName("Ахмуд Нари"), true);
        assert.equal(uut.setLastName("Gore Jr."), true);
    });

    it("Should reject value with unwanted symbols", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("G0re"), false);
        assert.equal(uut.setLastName("Over?ey"), false);
    });
});


describe("Phone number validation", () => {
    it("Should reject empty value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPhoneNumber(""), false);
        assert.equal(uut.setPhoneNumber(" "), false);
    });

    it("Should reject value without leading +", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPhoneNumber("7(123)456-7890"), false);
        assert.equal(uut.setPhoneNumber("-7(123)456-7890"), false);
        assert.equal(uut.setPhoneNumber("*7(123)456-7890"), false);
    });

    it("Should reject value with wrong country code", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPhoneNumber("+8(123)456-7890"), false);
        assert.equal(uut.setPhoneNumber("+77(123)456-7890"), false);
    });

    it("Should reject value with wrong area code", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPhoneNumber("+7(0)456-7890"), false);
        assert.equal(uut.setPhoneNumber("+7(01)456-7890"), false);
        assert.equal(uut.setPhoneNumber("+7(0123)456-7890"), false);
    });

    it("Should reject too long value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPhoneNumber("+7(123)456-78924"), false);
        assert.equal(uut.setPhoneNumber("+7(123)4564-7892"), false);
    });

    it("Should accept matching value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPhoneNumber("+7(123)456-7892"), true);
    });
});

describe("Email validation", () => {
    it("Should reject empty value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail(""), false);
        assert.equal(uut.setEmail(" "), false);
    });

    it("Should reject @mail.ru value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("@mail.ru"), false);
        assert.equal(uut.setEmail(" @mail .ru "), false);
    });

    it("Should reject mymail@ value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("mymail@"), false);
        assert.equal(uut.setEmail(" mymail@ "), false);
    });

    it("Should reject mymail value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("mymail"), false);
        assert.equal(uut.setEmail(" mymail "), false);
    });

    it("Should reject mymail@. value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("mymail@."), false);
        assert.equal(uut.setEmail(" mymail@ . "), false);
    });

    it("Should accept mymail@mail value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("mymail@mail"), true);
        assert.equal(uut.setEmail(" mymail@mail "), true);
    });

    it("Should accept mymail@mail.ru value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("mymail@mail.ru"), true);
        assert.equal(uut.setEmail(" mymail@mail .ru "), true);
    });

    it("Should accept my.mail@mail.ru value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("my.mail@mail.ru"), true);
        assert.equal(uut.setEmail(" my.mail@m ail.ru "), true);
    });

    it("Should accept my-mail@mail.ru value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setEmail("my-mail@mail.ru"), true);
        assert.equal(uut.setEmail(" my-mail@mail.ru "), true);
    });
});

describe("Password validation", () => {
    it("Should reject empty value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPassword(""), false);
        assert.equal(uut.setPassword(" "), false);
    });

    it("Should reject too short value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPassword("Aa12345"), false);
        assert.equal(uut.setPassword(" Aa12345   "), false);
    });

    it("Should reject value with unwanted symbols", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPassword("Aa12 345678"), false);
        assert.equal(uut.setPassword(" Aa.12345698   "), false);
    });

    it("Should accept matched value", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setPassword("Aa12345678"), true);
        assert.equal(uut.setPassword(" Aa12345698   "), true);
    });
});
