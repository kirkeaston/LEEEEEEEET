var threeSum = function(nums) {
    if(nums.length<3) return []
    nums.sort((a,b)=>a-b)
    
    let result = []
    for(let i=0;nums[i]<=0;i++){
        if(nums[i]==nums[i-1]) continue
        
        let j = i+1
        let k = nums.length-1
        for(let j=i+1;j<k;j++) {
            let remain = (-1) * (nums[i]+nums[j])
            
            if(nums[k] <remain ) continue
            while(nums[k]>=remain && k>j){
                if(nums[k]==remain){
                    result.push([nums[i], nums[j],nums[k]])
                    while(j<k && nums[j]==nums[j+1]) j++
                    break
                }
                k--
       }}}
    return result
};