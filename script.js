function setRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function fillArr() {
    let arr = [];
    let size = setRandomNumber(3, 10);

    for (let i = 0; i < size; i++) {
        arr[i] = setRandomNumber(1, 10);
    }

    return arr;
}



function checkingGroups() {
    let arrResults = [];
    let arrNumbers = fillArr();

    console.log("1 Task");
    console.log(arrNumbers);
    console.log("   ");


    for (let i = 0, j = 1, k = 2; k < arrNumbers.length; i++, j++, k++) {
        if (arrNumbers[i] > arrNumbers[j] && arrNumbers[j] < arrNumbers[k] ||
            arrNumbers[i] < arrNumbers[j] && arrNumbers[j] > arrNumbers[k]) {
            arrResults.push(1);
        } else {
            arrResults.push(0);
        }
    }

    console.log(arrResults);
    console.log("   ");

}


function createMatrix() {
    let arr = [];
    let maxMatrixSize = setRandomNumber(3, 10);

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < maxMatrixSize; j++) {
            arr[i][j] = setRandomNumber(1, 10);
        }
    }

    return arr;
}




function matrixCheck() {
    let arr = createMatrix();
    let arrResults = [];
    let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log("2 Task");
    console.log(arr);
    console.log("   ");


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



        for (let i = 0; i < checkedArray.length; i++) {
            for (let j = 0; j < numbersArr.length; j++) {
                if (checkedArray[i] === numbersArr[j]) {
                    numbersArr.splice(1, j);
                }
            }
        }

        if (numbersArr.length == 0) {
            arrResults.push(true);
        } else {
            arrResults.push(false);
        }

        console.log(checkedArray);
        console.log("   ");

        console.log(arrResults);


    }


    console.log("   ");

}



function sortArr() {


    let arrRightLeft = [];
    let arrResults = [];
    let arr = [
        ["Hello", "world"],
        ["Brad", "came", "to", "dinner", "with", "us"],
        ["He", "loves", "tacos"]
    ];
    console.log(" 3 Task  ");
    console.log(arr);
    console.log("  ");

    let count = 0;
    let lastPoint = 0;



    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            count += arr[i][j].length;
        }

        if (count <= 16) {

            let str = arr[i].join(" ");
            arrResults.push("* " + str + "       *");
            arrRightLeft.push("LEFT");
        }

        if (count > 16) {
            arrRightLeft.push("RIGHT");
            let count = 0;
            for (let k = 0; k < arr[i].length; k++) {
                count += arr[i][k].length;


                if (count > 16) {
                    lastPoint = k - 1;
                    let timeArr = [];
                    for (let f = 0; f < k - 1; f++) {
                        timeArr.push(arr[i][f]);


                    }
                    let str = timeArr.join(" ");
                    arrResults.push("*       " + str + " *");

                    count = 0;



                }



                if (k == arr[i].length - 1) {

                    let tempArr = [];
                    for (let l = lastPoint; l < arr[i].length; l++) {
                        tempArr.push(arr[i][l]);
                    }
                    let str = tempArr.join(" ");
                    arrResults.push("*       " + str + " *");
                }

            }
        }




        count = 0;

    }




    console.log(arrResults);
    console.log(arrRightLeft);


}



checkingGroups();
matrixCheck();
sortArr();