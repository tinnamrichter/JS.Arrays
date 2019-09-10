'use strict';

function first(text) {
    return text.charAt(text);
}
function last(text) {
    return text.charAt(text.length-1);
}
function middle(text) {
    return text.substring(1, text.length -1);
}

let text = prompt('skriv text');

let isPalindrome = function(text) {
    if (text.length <= 1) {
        return true;
    }
    return first(text) === last(text) && isPalindrome(middle(text))
}

console.log(isPalindrome(text));