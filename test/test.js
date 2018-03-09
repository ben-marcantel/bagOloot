"use strict";

const {assert: {isFunction, isObject, hasAllKeys}} = require('chai');
const {input} = require('../js/args.js');



describe("args module",()=>{
    it("should be a function",()=>{
        isFunction(input)
    })
    it("should return an object",()=>{
        isObject(input());
    })
    it("should have two keys, name and toy",()=>{
        hasAllKeys(input(),{name:"jed",toy:"stick"});
    })
    it("should have values that are strings only",()=>{
        
    });
})