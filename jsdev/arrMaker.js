const arrMaker = () => {
    let arr = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    let newArr = [];
    for (let i = 1; i < 4; i += 1) {
        for (let y = 0; y <= 11; y += 1) {
            switch (i) {
                case 1:
                    newArr.push(arr[y] + '4');
                    break;
                case 2:
                    newArr.push(arr[y] + '5');
                    break;
                case 3:
                    newArr.push(arr[y] + '6');
            };
        };
    };


    return newArr;
};