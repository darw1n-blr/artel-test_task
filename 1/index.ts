
let str: string = "qwe\nasdfgh\nzxc"

const func1 = (str:string, position:number) =>{

    if (str[position] === undefined) { return "Wrong position" }

    let leftPos= position;
    let rightPos = position;


    while(str[rightPos] != "\n"){
        rightPos++
        if (rightPos === str.length){
            break;
        }

    }

    rightPos -=1;

    while(str[leftPos] != "\n"){
        leftPos--
        if (leftPos === 0){
            break;
        }
    }

    leftPos +=1;


    return {leftPos, rightPos};
}

console.log(func1(str, 5))