import { beforeEach, describe, test, expect } from "vitest";
import { MarkovMachine } from "./markov.js";

let phrase;
let markov;

beforeEach(function () {
    phrase = "The cat in the hat.";
    markov = new MarkovMachine(phrase);
});

// TODO: put in its own describe
test("test successful creation of MarkovMachine instance", function () {
    expect(() => new MarkovMachine(1)).toThrowError();
    expect(() => new MarkovMachine("Test")).not.toThrowError();
})


describe("test getChains", function () {
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