//1차원배열 요소(엘리먼트)
//무저건 index 0부터 간다 
//0,1,2,3,4
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 방이 10개 array.length


console.log('길이는:' + array.length);//6

for (var i = 0; i < array.length; i++) {

    console.log(array[i]);

}




// 2 ~ 10까지 출력 입력 받고 ,원소 만들고 하던지


console.log('==============================');

var array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('길이:' + array2.length);
//  0 ~ 9 :9개돌기 
for (var i = 0; i < 9; i++) {

    console.log(array2[i]);
}
console.log('==============================');
// 얼마큼 받는지 모른다 []
var array3 = [];

// 1 ~ 10 :10개    
// 10 -1-> 0 ~ 9  

var init = 0;


var sum = 0;
for (var i = 0; i < 10; i++) {

    array3[i] = ++init;
    console.log(array3[i]);
    sum = sum + array3[i];

    console.log('합은:' + sum);

}



//1 ~ 10 합을구하는데 짝수의합 홀수의합 
//

var one=0;
var two=0;
    var array4=[];

for(var i=0;i<10;i++){

    if(array4%2==0){
        //짝수의합 
    }else{
        //홀수의합 

    }

}
























