// Get saved data from sessionStorage
myArray = decoder();
console.log(myArray);
myArray = createArray(myArray);
const pageBody = document.querySelector('.body');
let templateElement = document.createElement('div');
templateElement.classList.add('user__sum');
templateElement.innerHTML = `
        <h1 class="form__header">
        You entered the following data:
    </h1>
    <h2 class="user-header preferred-filed">
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
        <p class="user-header--content">${arrayPopper(myArray)}</p>
    </h2>
    `
pageBody.append(templateElement);

function arrayPopper(myArray) {
    let text;
    let check;
    if (myArray.length > 0) {
        text = decodeURIComponent(myArray.pop());
        return text;
    } else {
        text = '';
        return text;
    }
}

function createArray(myArray) {
    let temp;
    let newArray=[];
    myArray = myArray.name.toString();
    for (let i = 1, j = 1; j <=19; j = j + 2) {
        temp = myArray.split("\"")[j];
       // temp = temp.split("=")[i];
        console.log(temp);
        newArray.push(temp);
    }
    return newArray;

}