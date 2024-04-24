function twoArray1() {
    //2차원배열은 [][]  []
    //행열 
    //행:가로 
    //열:세로 



    var array = [

        [1, 2, 3]      //0
        , [4, 5, 6]      //1
        , [7, 8, 9]];    //2
    // for 행 
    //     for 열  
    for (var i = 0; i < 3; i++) {

        for (var x = 0; x < 3; x++) {
            console.log(array[i][x]);
        }

    }
}

console.log(twoArray1());
//1행 1,2,3 
//2행 4,5,6 2차원배열로 출력하시오 
//1 ~ 6 합을구하시오 




function twoArray2() {


    //1 ~ 12  짝수의합 홀수의합  총합 
    //cafe.naver.com/kimpspring304 
    //일반과제 


    var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

    var sum = 0;
    var two = 0;
    var one = 0;

    // 2차원배열 :array.length->행 4  
    // 2차원배열 :array[i].length->열 3   



    for (var i = 0; i < array.length; i++) {
        for (var x = 0; x < array[i].length; x++) {

            if (array[i][x] % 2 == 0) {

                two = two + array[i][x];

            } else if (!array[i][x] % 2 == 0) {

                one = one + array[i][x];
            }
            sum = sum + array[i][x];

        }

    }

    return '짝수의합:' + two + ' 홀수의합:' + one + '총합:' + (one + two);
}

console.log(twoArray2());




//11:30
//입력 2차원배열 




function twoArray2() {

    //1차원배열 

    //var array=[][];
    var array = [];

    // 0 ,1   2 
    //  0,1,2 3 



    //  1 ~ 6 까지 입력받고 출력 

    console.log('===========================');
    var init = 0;
    for (var i = 0; i < 2; i++) {

        array[i] = [];


        for (var x = 0; x < 3; x++) {
            array[i][x] = ++init;

        }

    }
    console.log(array);

}
console.log(twoArray2());

console.log('=====================');

function Varvalue() {

    //var es5  2009 변수명을 다시 선언할수있다 es5 api 
    //let:es6 2015 아직도 쓰고있다 다시 선언할수없다 es6 api react   

    //var name선언할수있다 
    var name = '아무개';

    var name = '홍길동';


    // console.log(name);


    //let 변수명을 다시 선언할수없다 
    // let address='미국';
    // let address='미국2';



}

// console.log(Varvalue());




//1 ~ 9 1,2,3  4,5,6  7,8,9 입력하고 출력하시오 
//12:20



function twoArray3() {

    var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    // 3 행  
    // 3 열 

    console.log('=======================');

    for (var i = 0; i < 3; i++) {

        for (var x = 0; x < 3; x++) {

            console.log(array[i][x]); 0

        }

    }

}


console.log(twoArray3());



function twoArray4() {


    //1 ~ 9 
    //123    0 
    // 456    1 
    //  789     2
    // 1차원배열:[]


    //2차원배열:[][]
    var array = [];
    var init = 0;
    for (i = 0; i < 3; i++) {

        array[i] = [];

        for (x = 0; x < 3; x++) {
            array[i][x] = init + 1;
        }

    }


}


function twoArray5() {



    //1,2,3,4,5 
    // 6,7,8,9,10
    //  11,12,13,14,15 

    //합을구하시오 

    // 짝수의 합 홀수의합 

    var init = 0;

    var array = [];

    console.log('==================================');
    // var sum=0;
    var one = 0;
    var two = 0;

    for (var i = 0; i < 3; i++) {
        array[i] = [];
        for (var x = 0; x < 5; x++) {

            array[i][x] = ++init;
            // console.log(array[i][x]);

            // sum =sum +array[i][x];

            if (array[i][x] % 2 == 0) {
                two = two + array[i][x];
            } else {

                one = one + array[i][x];
            }

        }

    }


    console.log('짝수의합:'+two);
    console.log('홀수의합:'+one);

}




console.log(twoArray5());



// 1,2,3,4,5,6
// 7,8,9,10,11,12

// 3 ,7 10 값을뺀다 
//if(!(array[i][x]==3||i==7||i==10)
//if(array[i][x] !=3 && i !=7 && i !=10)
//  if(3,7,10)을 짝수의합 홀수의합을 구해서 출력 (총합까지 )

//cafe.naver.com/kimpspring304 
// 일일문제




//2차원배열로 입력하고 출력하시오
//짝수의 합 홀수의 합


//























