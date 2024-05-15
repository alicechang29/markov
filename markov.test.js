import { beforeEach, describe, test, expect } from "vitest";
import { MarkovMachine } from "./markov.js";

let phrase;
let markov;

// NOTE: use beforeAll for setup that needs to be done once
// make a new MarkovMachine for each test


// TODO: put in its own describe
// test("test successful creation of MarkovMachine instance", function () {
//     expect(() => new MarkovMachine(1)).toThrowError();
//     expect(() => new MarkovMachine("Test")).not.toThrowError();
// })

//use "the cat in the cat" to test for possible loop
//below never hits the possibility of looping
// test this first with a more complex example

describe("test getChains", function () {
    beforeEach(function () {
        phrase = "The cat in the hat.";
        markov = new MarkovMachine(phrase);
    });

    test("successful", function () {
        expect(markov.getChains()).toEqual({
            "The": ["cat"],
            "cat": ["in"],
            "in": ["the"],
            "the": ["hat."],
            "hat.": [null],
        });
    });
});

describe("test getText", function () {
    beforeEach(function () {
        phrase = "The cat in the hat.";
        markov = new MarkovMachine(phrase);
    });

    test("successful", function () {
        expect(markov.getText()).toEqual("The cat in the hat.");
    });

});


describe("test with branches", function () {
    beforeEach(function () {
        phrase = "the cat in the cat";
        markov = new MarkovMachine(phrase);
    });

    test("Markov validity", function () {
        const chains = markov.chains;
        const words = markov.getText().split(" ");

        for (let i = 0; i < words.length - 1; i++) {
            expect(chains[words[i]].includes(words[i + 1])).toEqual(true);
        }

        expect(chains[words.slice(-1)].includes(null)).toEqual(true);
    });


});