const calculator = {
    question1: function (arr, num) {
        ans = []
        for(number of arr){
            if(number > num){
                ans.push(number)
            }
        }
        return ans
    },

    question2: function(string) {
        ans = []
        for(letter of string){
            if(!ans.includes(letter)){
                ans.push(letter);
            }
        }
        return ans
    },

    question3: function(contries) {
        lenMaxlen = 0
        ans = ''
        for(country of contries){
            if(country.length > lenMaxlen){
                lenMaxlen = country.length
                ans = country
            }
        }
        return ans
    },

    question4: function(string){
        let vowels = ['a', 'e', 'i', 'o', 'u']
        let count = 0;
        for(char of string){
            if(vowels.includes(char) || vowels.includes(char.toUpperCase())){
                count++;
            }
        }
        return count;
    }, 

    question5: function(start, end){
        let diff = end - start;
        let random = Math.floor((Math.random() * diff)) + start;
        return random
    }
}

console.log(calculator.question5(10, 20));