function isAnagram(str1, str2) {
    // Remove whitespace from both strings and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Convert the strings to arrays of characters
    const arr1 = str1.split('');
    const arr2 = str2.split('');

    // Sort the arrays of characters
    arr1.sort();
    arr2.sort();

    // Convert the sorted arrays back to strings
    const sortedStr1 = arr1.join('');
    const sortedStr2 = arr2.join('');

    // Compare the sorted strings and return true if they are equal, indicating an anagram
    return sortedStr1 === sortedStr2;
}

function compareAnagrams() {
    // Get input values from user
    const str1 = document.getElementById('inputStr1').value; //Hello
    const str2 = document.getElementById('inputStr2').value; //World

    // Call isAnagram() function to check if the input strings are anagrams
    const result = isAnagram(str1, str2);

    // Display result to user
    const output = document.getElementById('output');
    if (result) {
        output.innerHTML = '"' + str1 + '" and "' + str2 + '" are anagrams.';
    } else {
        output.innerHTML = '"' + str1 + '" and "' + str2 + '" are not anagrams.';
    }
}