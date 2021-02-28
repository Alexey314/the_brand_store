"use strict"

import UserRegistrationData from "./user_registration_data.mjs";
import { assert } from "chai";

describe("User first name validation", () => {
    it("Should reject empty value ", () => {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName(""), false);
        assert.equal(uut.setFirstName(" "), false);
    });
    
    it("Should reject one letter value", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("J"), false);
        assert.equal(uut.setFirstName(" a "), false);
    });

    it("Should reject too long value", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("Jooooooooooooooooooooooooooooooooooooooooohn"), false);
    });

    it("Should accept single word value", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("John"), true);
        assert.equal(uut.setFirstName("Иван"), true);
        assert.equal(uut.setFirstName("john"), true);
        assert.equal(uut.setFirstName("иван"), true);
    });

    it("Should accept valid value with leading and/or trailing spaces", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName(" john "), true);
        assert.equal(uut.setFirstName(" иван "), true);
    });

    it("Should accept multi words value with delimiters", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setFirstName("Jean-Pierre"), true);
        assert.equal(uut.setFirstName("Мар'яна"), true);
        assert.equal(uut.setFirstName("pedro alberto"), true);
        assert.equal(uut.setFirstName("John M."), true);
    });

    it("Should reject value with unwanted symbols", function() {
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

    it("Should reject one letter value", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("S"), false);
        assert.equal(uut.setLastName(" d "), false);
    });

    it("Should reject too long value", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("Smmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmit"), false);
    });

    it("Should accept single word value", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("Smith"), true);
        assert.equal(uut.setLastName("Петров"), true);
        assert.equal(uut.setLastName("smith"), true);
        assert.equal(uut.setLastName("петров"), true);
    });

    it("Should accept valid value with leading and/or trailing spaces", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName(" Smith "), true);
        assert.equal(uut.setLastName(" Петров "), true);
    });

    it("Should accept multi words value with delimiters", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("Римский-Корсаков"), true);
        assert.equal(uut.setLastName("O'Reilly"), true);
        assert.equal(uut.setLastName("Ахмуд Нари"), true);
        assert.equal(uut.setLastName("Gore Jr."), true);
    });

    it("Should reject value with unwanted symbols", function() {
        const uut = new UserRegistrationData;
        assert.equal(uut.setLastName("G0re"), false);
        assert.equal(uut.setLastName("Over?ey"), false);
    });
});