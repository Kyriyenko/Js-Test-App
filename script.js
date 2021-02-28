const btn = document.querySelector('.btn');
const firstResults = document.querySelector('.first_results');
const secondResults = document.querySelector('.second_result');
const thirdResult = document.querySelector('.third_result');


btn.addEventListener('click', showResult);



function showResult() {
    checkingGroups();
    matrixCheck();
    sortArr();
}



function setRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function fillArr() {
    let arr = [];
    let size = setRandomNumber(3, 10);

    for (let i = 0; i < size; i++) {
        let number = setRandomNumber(1, 10);
        arr[i] = number;
    }

    return arr;
}



function checkingGroups() {
    let arrResults = [];
    let arrNumbers = fillArr();

    const newArrNumbers = document.createElement('div');
    newArrNumbers.innerText = arrNumbers;
    newArrNumbers.classList.add('firstArrNumb');
    firstResults.appendChild(newArrNumbers);


    for (let i = 0, j = 1, k = 2; k < arrNumbers.length; i++, j++, k++) {
        if (arrNumbers[i] > arrNumbers[j] && arrNumbers[j] < arrNumbers[k] ||
            arrNumbers[i] < arrNumbers[j] && arrNumbers[j] > arrNumbers[k]) {
            arrResults.push(1);
        } else { arrResults.push(0); }
    }

    const newResultArr = document.createElement('div');
    newResultArr.innerText = arrResults;
    newResultArr.classList.add('newResultArr');
    firstResults.appendChild(newResultArr);

}


function createMatrix() {
    let arr = [];
    let maxMatrix = setRandomNumber(3, 10);

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < maxMatrix; j++) {
            let number = setRandomNumber(1, 10);
            arr[i][j] = number;
        }

    }

    return arr;
}




function matrixCheck() {
    let arr = createMatrix();
    let arrResults = [];
    let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(arr);

    const newArrNumbers = document.createElement('div');
    newArrNumbers.innerHTML = arr;
    newArrNumbers.classList.add('secondArrNumb');
    secondResults.appendChild(newArrNumbers);

    for (let n = 0; n < arr[0].length; n++) {
        let checkedArray = [];

        for (let j = 0; j < 3; j++) {
            for (let k = n; k < n + 3; k++) {
                if (k + 1 > arr[0].length) {
                    return;
                }
                checkedArray.push(arr[j][k]);
            }
        }

        const newSelectNumbers = document.createElement('div');
        newSelectNumbers.innerText = checkedArray;
        newSelectNumbers.classList.add('newSelectNumbers');
        secondResults.appendChild(newSelectNumbers);


        for (let i = 0; i < checkedArray.length; i++) {
            for (let j = 0; j < numbersArr.length; j++) {
                if (checkedArray[i] === numbersArr[j]) {
                    numbersArr.splice(1, j);
                }
            }
        }

        if (numbersArr.length == 0) {
            arrResults.push(true);
        } else { arrResults.push(false); }


        const newArrRes = document.createElement('div');
        newArrRes.innerText = arrResults;
        newArrRes.classList.add('secondArrResults');
        secondResults.appendChild(newArrRes);
    }

}



function sortArr() {
    let arr = [
        ["Hello", "world"],
        ["Brad", "came", "to", "dinner", "with", "us"],
        ["He", "loves", "tacos"]
    ];

    const newArrChar = document.createElement('div');
    newArrChar.innerHTML = arr;
    newArrChar.classList.add('secondArrNumb');
    thirdResult.appendChild(newArrChar);


    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr[i].length; j++) {
            count += arr[i][j].length;
        }


        if (count <= 16) {
            arr[i].push("   *");
        } else {
            arr[i].unshift('*   ');
        }

        count = 0;
    }

    const selectArrChar = document.createElement('div');
    selectArrChar.innerHTML = arr;
    selectArrChar.classList.add('secondArrNumb');
    thirdResult.appendChild(selectArrChar);



    console.log(arr);


}