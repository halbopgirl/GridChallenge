function gridChallenge(grid) {
    grid2 = grid.map((str) => str.split('').sort().join(''));
    console.log(grid2)
  
    for (let i = 0; i < grid2[0].length; i++) {
        let everyIthLetter = '';
        for (let j = 0; j < grid2.length; j++) {
            everyIthLetter = everyIthLetter + grid2[j].charAt(i);
        }
        
        if (!(everyIthLetter == everyIthLetter.split('').sort().join(''))) {
            return 'NO'
        } else {
          console.log(everyIthLetter, )
        }
    }
    
    return 'YES'
}

gridChallenge(['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'])