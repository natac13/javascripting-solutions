var eat = function(eat) {
    if(typeof eat === 'string') {
        return eat + ' tasted really good.';
    };
};

console.log(eat('bananas'));