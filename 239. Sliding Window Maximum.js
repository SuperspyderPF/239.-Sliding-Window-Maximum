var maxSlidingWindow = function(nums, k) {
    let solution = [];
    let freq = [];
    
    for (let func1=0; func1<k; func1++){
        while (freq.length && nums[func1] > freq[freq.length-1]){
            freq.pop();
        }
        freq.push(nums[func1]);
    }
    solution.push(freq[0]);
    
    for (let j=k; j<nums.length; j++){
        if (nums[j-k] == freq[0]) freq.shift();
        while (freq.length && nums[j] > freq[freq.length-1]){
            freq.pop();
        }
        freq.push(nums[j]);
        solution.push(freq[0]);
    }
    return solution;
};

//time O(n)
//space O(n)