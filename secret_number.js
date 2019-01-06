'use strict';
module.exports = function() {

    let calcNum = Math.random()* 100000 + 1

    let secretNum = function(){
    return calcNum;
    }
    return secretNum
};