vetor = [3,4,5]
vetor[3] = 34
console.log("Nosso vetor é igual a " + vetor)
arraytest = []
array = [4,5,6,0,24,53,65,2,1412,121,1,324,234,234,32,234,23,32,432,324,4,234,2432,324,32432,];
for(i=0;i<array.length;i++){
console.log(array[i])
arraytest[i] = "TESTEEEEE"
}
console.log(arraytest)

array4 = [2,3,6,7,1,2]
array4.sort()


console.log(array4)
let valores = [8, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 44, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1, 7, 6, 9, 3, 10, 1]
for (let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(44))