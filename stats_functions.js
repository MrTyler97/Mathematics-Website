const eqn_LHSs = [
    "x = ",
    "n = ",
    "x<sub>min</sub> = ",
    "x<sub>max</sub> = ",
    "&sum; = ",
    "&#x0078;&#x0304; = ",
    "x&#x0303; = ",
    "&#x0073;<sup>2</sup> = ",
    "&#x0073; = "
];
function calculate_array_sum(a) {
    sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
function calculate_mean(set_sum, set_size) {
    mean = set_sum / set_size;
    return mean;
}
function calculate_median(array_of_nums) {
    let mid = Math.floor(array_of_nums.length / 2);
    if (array_of_nums.length % 2 === 0) {
        return (array_of_nums[mid - 1] + array_of_nums[mid]) / 2;
    }
    if (array_of_nums.length % 2 == 1) {
        return array_of_nums[mid];
    }
}
function calculate_dif_squared(x_i, x_bar) {
    return (x_i - x_bar) ^ 2;
}
function calculate_variance(arr_of_nums, mean) {
    var variance = 0;
    for (var i = 0; i < arr_of_nums.length; i++) {
        variance += Math.pow(arr_of_nums[i] - mean, 2);
    }
    return variance /= arr_of_nums.length - 1;
}
function calculate_stddev(variance) {
    return Math.sqrt(variance);
}