const dummy = (blogs) => {

    return 1

}

const totalLikes = (blogs) => {

    if(blogs.length == 0){
        return 0
    }else{
    const likes = blogs.map(blog => blog.likes).reduce((a,b) => a+b, 0)
        return likes
    }

}

const favoriteBlog = (blogs) => {

    if(blogs.length == 0) {
        console.log('The correct if is run')
        return 0
    }else{
        const likes = blogs.map(blog => blog.likes)
        const max = Math.max(...likes)
        console.log('Max index is ', likes.indexOf(max))
        return blogs[likes.indexOf(max)]
    }

}


module.exports = {

    dummy,
    totalLikes,
    favoriteBlog
}