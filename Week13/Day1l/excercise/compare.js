const isAnagram = (str1, str2) => {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    const arr1 = str1.split('');
    const arr2 = str2.split('');

    arr1.sort();
    arr2.sort();

    const sortedStr1 = arr1.join('');
    const sortedStr2 = arr2.join('');

    return sortedStr1 === sortedStr2;
}

export default isAnagram;