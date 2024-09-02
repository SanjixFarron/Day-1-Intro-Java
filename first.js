//let is to change a variable
//COnst is a variable that CANNOT be changed.

function ComputeLargeNum(Num1,Num2,Num3){

    let LargeNum = Num3;
    if (Num1>Num2 && Num1>Num3){
        LargeNum = Num1;
    }
    else if(Num2>Num1 && Num2>Num3){
        LargeNum = Num2
    }
    return LargeNum;
}

let LargestNumber = ComputeLargeNum(10,20,13)
console.log(LargestNumber);

//write functions using arrows (this is new ? !)

const computeLargestNumberArrowWay =(firstNumber, SecondNumber, THirdnNumber)=>{
    let LargeNum = Num3;
    if (Num1>Num2 && Num1>Num3){
        LargeNum = Num1;
    }
    else if(Num2>Num1 && Num2>Num3){
        LargeNum = Num2
    }
    return LargeNum;

}

//Ternary Way of writing

const blah =(firstNumber, SecondNumber, ThirdnNumber)=>{
//return the condition in the way of (a>b)?A:(osmehting)?b:c  (the last thing means reutrning C)
}
