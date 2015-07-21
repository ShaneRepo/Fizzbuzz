
var i;
var myArray = new Array();
for (i = 1; i <= 100; i++)
{
    myArray[i] = i;
    if (myArray[i] % 3 === 0 && myArray[i] % 5 === 0){
        document.write("FizzBuzz");
        document.write("</br>");
    }else if (myArray[i] % 3 === 0){
        document.write("Fizz");
        document.write("</br>");
    }else if (myArray[i] % 5 === 0){
        document.write("Buzz");
        document.write("</br>");
    }else{
        document.write(myArray[i]);
        document.write("</br>");
    }

}