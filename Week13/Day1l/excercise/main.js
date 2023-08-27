import isAnagram from './compare.js';

const compareAnagrams = () => {
    const str1 = document.getElementById('inputStr1').value;
    const str2 = document.getElementById('inputStr2').value;

    const result = isAnagram(str1, str2);

    const output = document.getElementById('output');
    if (result) {
        output.innerHTML = `"${str1}" and "${str2}" are anagrams.`;
    } else {
        output.innerHTML = `"${str1}" and "${str2}" are not anagrams.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const compareBtn = document.querySelector('button');
    compareBtn.addEventListener('click', compareAnagrams);
});