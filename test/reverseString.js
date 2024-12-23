function reverse(name) {

    let mid = Math.floor(name.length/2);
    let count = 0;
    let text = '';

    while (count < name.length) {
        text += name[mid]
        console.log(text)
        mid++;
        count++;

        if (mid == name.length) {
            mid = mid%name.length;
        }
      
    }
    return text;

}

reverse('FURNITURE');