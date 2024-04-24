function Kimhyunho() {


    var array = [];

    var init = 1;
    var sum = 0;
    for (var i = 0; i < 10; i++) {

        array[i] = ++init;
          sum = sum + array[i];
  
    }
    return sum;
}

console.log(Kimhyunho());



