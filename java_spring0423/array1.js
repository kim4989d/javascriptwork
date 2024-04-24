
console.log('it에 오신것을 환영합니다.');

//명사명사 뒤에 첫글짜는 대문자 명사 앞에 글짜 대문자  개발 규칙 

function oneArray1() {
    //1차원배열(공통) :
    //모든 배열은 0부터 시작한다 index (0)
    //모든 객체지향언어는 공통 
    var array = [1, 2, 3, 4];

    for (var i = 0; i < 4; i++) {
        console.log(array[i]);
    }

}

console.log(oneArray1());

//값을 입력하고 출력한다 

function oneArray2() {

    //입력 받고 출력 
    //[]:얼마큼 오는지모른다(요소가)
    var array = [];

    console.log('==========================');
    //1234
    var init = 0;
    for (var i = 0; i < 4; i++) {

        array[i] = ++init;


        console.log(array[i]);

    }

}


console.log(oneArray2());





function Undefined() {

    //return :던지겠다(어떤타입을(문자형,정수형,부울린형))
    //return:되돌리다 배구공 리턴

    console.log('==========================');
    console.log('print..........');
    return "function 기본적으로 return으로 던져야한다 ";



}

//f3:선택된 함수나 변수로 점프한다 
//마우스 누르고 + ctrl 점프  
//ctrl+ o:현재폐이지 모든 함수나 변수 보여준다 (공통)
console.log(Undefined());





//함수(메소드)펑션 
function oneArray3() {
    // 1 ~ 10합을구하시오 return  sum 

    var array = [];

    var init = 0;

    var sum = 0;
    for (var i = 0; i < 10; i++) {

        array[i] = ++init;

        sum = sum + array[i];

    }

    return sum;

}


console.log(oneArray3());





