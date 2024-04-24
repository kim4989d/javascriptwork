

//명사명사 뒤에 첫글짜는 대문자 (규칙)
//ctrl + m:왼쪽창 숨김 
//ctrl + j:하위창 숨김 



function arrayLesson() {
    console.log('function 말하다');


}

console.log('말하다');
console.log(arrayLesson());
//javascript/java 
//javascript:문법
//java: 문법  
//react  :es6

//변수선언
//javascript 는 변수선언을 하면 자동으로 undefined(아무것도 없다) 가붙는다 
var print;

console.log(print);






function oneArray() {

    //세상에서 2번째 
    //ctrl+shift+f 자동정렬 

    //모든 객체지향언어는 같다 
    //모든언어공통 :배열은 index 0부터 시작 한다 
    //값을 얻는것도 0부터 얻는다 


    console.log('=========================');


    var array = [1, 2, 3, 4, 5];

    for (var i = 0; i < 5; i++) {

        console.log(array[i]);

    }
}

console.log(oneArray());

// function j304Ex1()
// for 1~~11 1차원 배열로 출력
// 2:55  

//2 ~ 13 출력 

// 1차원배열 괄호하나 :[] var array = [1, 2, 3, 4, 5];

function oneArray2() {

    //배열은 무저건index 0부터 시작 (공통)
    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


    // array.length:엘리먼트(element)요소  엘리먼트 갯수 12
    // /배열의 요소는 
    //문자열 변수는 연결은 + 한다(공통)
    console.log('배열의길이는' + array.length);

    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}

console.log(oneArray2());



function oneArray3() {

    //입력을 받는데 어느정도 받는지 모른다 그래서 []
    var array = [];

    //1 ~ 9 
    var init = 0;
    for (var i = 0; i < 9; i++) {

        array[i] = ++init;

        console.log(array[i]);
    }

}

console.log(oneArray3());



// 1 ~ 10 입력 출력 



// oneArray4 만들어서 출력 



function oneArray5() {


    // 5 ~ 10 개발자님  이렇게해주세요 
    //1차원배열 [](공통) 
    //배열은 index 0부터 시작 
    var array = [];

    var init = 4;

    for (var i = 0; i < 6; i++) {

        array[i] = ++init;

        // 0 5 1 6 2 7 3 8 4 9 5 10
        console.log(array[i]);

    }

}

console.log(oneArray5());

// 3 ~ 12 입력 하고 출력 4:03 까지 


function oneArray6() {
    var array = [];
    var init = 2;
    for (var i = 0; i < 10; i++) {
        array[i] = ++init;

        console.log(array[i]);
    }


}


console.log(oneArray6());


// 1 ~ 10 합을출력  var array[1,2,3,4,5,6,7,8,9,10]
// 1 ~ 10 입력하고 합을출력  var array[]
//일일문제 
//cafe.naver.com/kimjavapspring304
// 일일문제 
//단일명사 앞에대문자 명사명사 뒤에 대문자 
//
function Sum() {

    var sum = 0;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    
    for (var i0 = 0; i < array.length; i++) {
        // console.log(arrays);
        sum=sum+array[i];
    }

        console.log(sum);





}



console.log(Sum());

x

