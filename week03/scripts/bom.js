/* declare three const variables that hold references to the input, button, and .list elements. */
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

/* Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList (This function does not exist, yet).
In that same array variable declaration and assignment, add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing. */
let chaptersArray = getChapterList() || [];

/* let's populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter. Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. That way each entry will be processed, i.e., appended to the list. */
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

/* Change the button click event listener to only do the following tasks (the other tasks in that original function will be used in a separate function named displayList): */
button.addEventListener('click', () => {
    /* check if the input is empty, if not, then */
    if (input.value != '') {

        /* call displayList with the input.value argument, */
        displayList(input.value);

        /* push the input.value into the chaptersArray, */
        chaptersArray.push(input.value);

        /* update the localStorage with the new array by calling a function named setChapterList, */
        setChapterList();

        /* set the input.value to nothing, and */
        input.value = '';

        /* set the focus back to the input. */
        input.focus();
    }
});

/* Create the displayList defined function that receives one parameter named item.
Put all the code that builds a list item from the previous button click event listener into this new displayList function and use the item parameter as the input. A deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage. */
function displayList(item) {
    /* create a li element */
    const li = document.createElement('li');

    /* create a delete button */
    const deleteButton = document.createElement('button');

    /* populate the li elements textContent or innerHTML with the input value */
    li.innerHTML = item;

    /* populate the button textContent with a ❌ */
    deleteButton.textContent = '❌';

    /* append the li element with the delete button */
    li.append(deleteButton);

    /* append the li element to the unordered list in your HTML */
    list.append(li);

    /* add an event listener to the delete button that removes the li element when clicked */
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        // deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage.
        deleteChapter(li.innerHTML);
        input.focus();
    });

    /* send the focus to the input element */
    /* input.focus(); */

}

// Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, we will need to use JSON.parse on the string.
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// define the deleteChapter function with a parameter named chapter that does three things.
function deleteChapter(chapter) {
    // reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when we called the deleteChapter function. Use string.slice() method to extract the last character.
    chapter = chapter.slice(0, chapter.length - 1);

    // redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Call the setChapterList function to update the localStorage item.
    setChapterList();
}
