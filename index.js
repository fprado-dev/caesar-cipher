const cipher = ( text ) => {
    if (typeof text === 'number' ) return;
    const alfa = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const arr = text.split("");
    const final = [];
    arr.map((letter, i) => {
        if (letter !== " ") {
            const indexOf = alfa.indexOf(letter.toLowerCase())
                let str;
            if (indexOf >= 24) {
                str = alfa[(indexOf - 26) +3]
            } else {
                str = alfa[indexOf + 3]
            }
            final.push(str.toUpperCase());
            
        } else {
            final.push(letter);
        }
         
    })
    
    console.log(final.join(""));
    
}

cipher(4);
cipher("GEEK HUNTER");
cipher("AWSOME JOBS");
cipher("TOP DEVELOPERS IN BRAZIL");
cipher("I AM GONNA ROCK IN THIS TEST");
