const dummy = (blogs) => {
    return(1)
}

const totalLikes = (blogs) => {
    const total = (blogs.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.likes
    }, 0 ))
    if (isNaN(total)) {
        return 0;
    } else {
        return total;
    }
}

module.exports = {
    dummy,
    totalLikes
}