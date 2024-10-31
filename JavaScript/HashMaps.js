// create a function that takes scores and inputs them into ranges,
// contains a min and max value and a number of intervals
// output should look like this 
// 0-20: **
// 20-40: *
// 40-60:
// 60-80:*

// bucket sort algorithm
// divide the interval by max / width
// if the score falls into the interval++;

// at the end print out the range and the # of stars
// scores = [20, 40, 60 ,80, 90, 10];
let scores = [12, 17, 43, 64, 70, 72, 81]
let max = 100
let width = 5

let interval = max / width; // 100 / 20 = 5
let bucket;
for (let i = 0; i < scores.length; i++) {
    // scores[i]; 
    // how can I find if scores[i] falls into a certain range
    bucket = scores[i] / 100;
    console.log(bucket); // depending on the bucket # we +=1?
    

}
//
// [0]  [1]  [2]  [3]
// [20, 40, 60, 80]


// bucket sort
function printHistogram(scores, min, max, width) {
    // create the intervals ... 
    let interval = max / width; 
    console.log(interval)
    // the counts array 
    let counts = new Array(width).fill(0);
    console.log(counts); // im thinking that each of these intervals can be an index? 
    let index = 0;
    for (let i = 0; i < scores.length; i++) {
        // add to our index s
       // let div = (scores[i] - min);
        //console.log(div, 'dichere ');
        index = Math.floor(scores[i] / width);

       console.log(index, 'index here ', scores[i]);
        if (counts[index] === 0) {
            counts[index] = 1;
        } else {
            counts[index]+=1;
        }




    }
    // should look like
  //  [2] [1] [] [1] [3]
    console.log(counts, 'arr of counts of the index?');

}

// basically do some bucket sort 

//  printHistogram ([12, 17, 43, 64, 70, 72, 81], 0, 100, 5)


// each interval can be like the index ... 
// [20][40][60][80][100]

// hashmap 