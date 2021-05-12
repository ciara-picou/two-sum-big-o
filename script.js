//https://leetcode.com/problems/two-sum/

//What runtime does this solution have?
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target && i != j) {
//         return [i, j];
//       }
//     }
//   }
// }

// //NAIVE SOLUTION WITH HELPFUL COMMENTS
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      console.log("i", i, "j", j);
      //   console.log(
      //     "nums[i]",
      //     nums[i],
      //     "+",
      //     "nums[j]",
      //     nums[j],
      //     "=",
      //     nums[i] + nums[j],
      //     "equals",
      //     target,
      //     "?"
      //   );
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }
}
twoSum([1, 2, 3, 4], 7);
// // twoSum([2, 7, 11, 15], 9);

//TWO SUMS REFACTORED FOR A MORE FAVORABLE RUNTIME
// function twoSum(nums, target) {
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]] >= 0) {
//       console.log([obj[nums[i]], i]);
//       return [obj[nums[i]], i];
//     }
//     obj[target - nums[i]] = i;
//     console.log(target - nums[i], i, nums[i]);
//   }
//   console.log(obj);
// }

// //twoSum([1, 2, 3, 4], 7);
// twoSum([2, 7, 11, 15], 9);

// //REFACTORED WITH HELPFUL COMMENTS
// function twoSum(nums, target) {
//   //create an object where the keys will be the number we would have to add
//   //to a given element to equal the target
//   //and the values will be the index where the given element is located in the nums array
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     let difference = target - nums[i];
//     console.log("target - nums[i] =", difference);
//     console.log(difference, "+ nums[i]", nums[i], "= target", target);
//     console.log(
//       "now our mission is to figure out if",
//       difference,
//       "is an element in our nums array"
//     );
//     //check if the given element is a key in our object
//     // if not it will return false
//     //this condition must be this: if(obj[nums[i]] >= 0)
//     //and not this:if(obj[nums[i]]) to account for edge case when the index
//     // where we can find the number that must be added to our element to hit the target
//     // is equal to zero bc that would return falsy and the code in line 112 would never run
//     if (obj[nums[i]] >= 0) {
//       console.log("nums[i]", nums[i], "is in our array!!");
//       console.log([obj[nums[i]], i]);
//       return [obj[nums[i]], i];
//     }
//     //target - element = difference
//     obj[difference] = i;
//     console.log("THE LOOP RAN AGAIN");
//   }
//   console.log(obj);
// }
// //twoSum([1, 2, 3, 4], 7);
// twoSum([2, 7, 11, 15], 9);

//REFACTORED WITH HELPFUL CONSOLE LOGS
// function twoSum(nums, target) {
//   console.log("input array", nums, "target", target);
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     //The line below must be "if (obj[nums[i]] >= 0) {"
//     //rather than " if (obj[nums[i]])" to account for the edge case
//     //when obj[nums[i]] == 0 bc that will be falsy therefore the code on line 40 would never run
//     if (obj[nums[i]] >= 0) {
//       console.log("if obj[nums[i]] >= 0 ran on iteration number", i);
//       console.log(nums[i], "plus", target - nums[i], "equals", target);
//       console.log([obj[nums[i]], i], "answer");
//       return [obj[nums[i]], i];
//     }
//     obj[Math.abs(target - nums[i])] = i;
//     console.log(
//       "target - nums[i]",
//       target,
//       "-",
//       nums[i],
//       "=",
//       Math.abs(target - nums[i])
//     );
//     console.log(
//       target - nums[i],
//       "is the key and",
//       i,
//       "i(the address where",
//       nums[i],
//       "lives)",
//       "is the value"
//     );
//     console.log("THE LOOP RAN AGAIN");
//     console.log(obj);
//   }
// }
// twoSum([1, 2, 3, 4], 7);

//What's the Big O of this Solution?

// function twoSum(nums, target){
//     	// initialize empty array for indexes
//         const indexesArray = [];

//         nums.forEach((num, index) => {
//             // subtract number you're looped on from the target number
//             const difference = target - num;

//             // see if that number is in the array and that it's not the same index as you're currently on
//             if(nums.includes(difference) && nums.indexOf(difference) !== index && indexesArray.length === 0) {
//                 // if that condition is met you'll push your current index and the index of that difference value
//                 indexesArray.push(index, nums.indexOf(difference))
//             }
//         });

//         return indexesArray;
//     };

//Given an array of movie times and a flight length
//Return True if a passenger can select two movies that add up to
//the total length of the flight else return false

//WHAT'S THE RUNTIME OF THIS SOLUTION?
//WHICH LINE IS MORE EFFICIENT? 168 or 169

// movieLengthsArray = [120, 110, 70]; // false
// movieRuntimesArray = [90, 110, 70]; //true
// flightLength = 160;
// function movieFlight(arr, val) {
//   let obj = {};
//   let difference = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(difference, "difference => val - arr[i]", obj);
//     obj[arr[i]] = arr[i];
//     difference = val - arr[i];
//     if (Object.values(obj).includes(difference)) {
//       //if (obj.hasOwnProperty(difference)) {
//       console.log(true);
//       return true;
//     }
//   }
//   console.log(obj, Object.keys(obj));
//   console.log(false);
//   return false;
// }
// movieFlight(movieLengthsArray, flightLength);
// movieFlight(movieRuntimesArray, flightLength);
