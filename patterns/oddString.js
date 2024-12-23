function oddString(arr) {
    
    for (let i =0; i< arr.length; i++) {
        for (let j =0; j< arr.length; j++) {
            if (i == j || (arr.length-1)-i == j) 
            {
                process.stdout.write(arr[j]);
            } else {
                process.stdout.write(' ');
            }
        }
        console.log('');
    }
 

}
process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    process.stdout.write(data + "\n")
})

oddString('1234567');