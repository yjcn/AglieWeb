const fibonacci = require('./lib/fibonacci')
const anagrams = require('./lib/anagrams')
// console.log(fibonacci(1));
console.log(anagrams('abc'));
console.log("Hello World");
function isleapyear(year)
{
    if(year%4==0 && year %100!=0)
    {
        return true;
    }
    else if(year %400==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log("2000:"+isleapyear(2000));
console.log("1900:"+isleapyear(1900));
console.log("2004:"+isleapyear(2004));
console.log("2006:"+isleapyear(2006));
function Fibonacci(num)
{
    if(num==0)
        return 0
    if(num==1)
        return 1
    return Fibonacci(num-1)+Fibonacci(num-2);
}
console.log("Fibonacci 5:"+Fibonacci(3));
for(var i=1;i<=20;i++)
{
    //console.log("Fibonacci "+":"+Fibonacci(3));
    //console.log(Fibonacci(i));
    //console.log(fibonacci(i));
    console.log("Fibonacci(%d):%d",i,fibonacci(i));
}
//反模式
/*
var len=20;
for(;len--;)
{
    //console.log(fibonacci(len));
    console.log("Fibonacci(%d):%d",len,fibonacci(len));
}
*/