let sample_array_1 = [1, 2, 3]; 
let sample_array_2 = [2, 30, 1]; 

let merge_array = (arr1, arr2) => {

    // use concat method to merge arrays
    let merged_array = arr1.concat(arr2);

    // assigning the value of the callback function to the variable
    let unique_array = remove_dupes(merged_array);

    return unique_array;
}

// callback function
let remove_dupes = arr => {

    let unique_array = [];

    for(let i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) === -1) {
            unique_array.push(arr[i]);
        }
    }

    return unique_array;
}

console.log(merge_array(sample_array_1, sample_array_2));   // [1, 2, 3, 30]