const assignment = {
    question1: arr => {
        let sum = 0;
        for(num of arr){
            sum += num;
        }
        return sum / arr.length;
    },

    question2: num => (num % 2 == 0),
};