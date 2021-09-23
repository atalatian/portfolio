const separateWords = (tag) => {
    return [...tag].map((letter)=>{
        if (letter === letter.toUpperCase()){
            letter = ` ${letter}`;
        }
        return letter;
    }).join('')
}

export default separateWords;