var longestConsecutive = function(nums) {
    var set = new Set();
    for(var i = 0; i < nums.length; i++){
        if(!set.has(nums[i])){
            set.add(nums[i]);
        }
    }
    var max = 0;
    var count = 0;
    for(i in nums){
        cur = nums[i];
        if(set.has(nums[i])){
            count = 1;
            set.delete(nums[i]);
        }        
        while(set.has(cur - 1)){
            if(set.has(cur - 1)){
                count ++;
                set.delete(cur - 1);
                cur -= 1;
            }   
        }
        cur = nums[i];
        while(set.has(cur + 1)){
            if(set.has(cur + 1)){
                count ++;
                set.delete(cur + 1);
                cur += 1;
            }   
        }

        if(count > max){
            max = count;
        }
    }

    return max;
};