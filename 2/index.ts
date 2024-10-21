interface A {
    key1: string;
    key2: number;
    keyX: number;
}

interface B {
    key3: string;
    key4: number;
}

const arr: string[] = ["key2", "key3"]

const PartA: Partial<A> =
    {
        key1: "key1",
        key2 : 2
    }

const PartB: Partial<B> =
    {
        key3: "key3",
    }



const func2 = (data: Partial<A> | Partial<B>, array: string[]) => {
    let result: boolean = false;
        if (Object.keys(data).some(key => array.includes(key))) {
        result = true
        }

   return result;


}

console.log(func2(PartA, arr));
console.log(func2(PartB, arr));