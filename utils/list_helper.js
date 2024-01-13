const totalLikes = (blogs) => {
  const sum = blogs.reduce((sum, blog) => {
    return sum + blog.likes;
  }, 0)
  return sum || 0;
}

const favoriteBlog = (blogs) => {
  const max = Math.max(...blogs.map(blog => blog.likes))
	const fav = blogs.find(blog => blog.likes === max)
	return {
		title: fav?.title,
		author: fav?.author,
		likes: fav?.likes
	} || {}
}

const mostBlogs = (blogs) => {
  const authorsByBlogsNumber = blogs
    .reduce((authorCounts, blog) => {
      const authorName = blog.author;
      return {
        ...authorCounts,
        [authorName]: (authorCounts[authorName] || 0) + 1
      }
    }, {})
  const mostBlogsAuthor = Object.entries(authorsByBlogsNumber)
    .map(author => ({
        'author': author[0],
        'blogs': author[1]
      }
    ))
    .sort((a, b) => a.blogs - b.blogs)

  return mostBlogsAuthor[mostBlogsAuthor.length - 1]
}

const mostLikes = (blogs) => {
  const authorsByLikes = blogs
  .reduce((authorTotalLikes, blog) => {
    const authorName = blog.author;
    return {
      ...authorTotalLikes,
      [authorName]: (authorTotalLikes[authorName] || 0) + blog.likes
    }
  }, {})
  const topLikesAuthor = Object.entries(authorsByLikes)
    .map(author => ({
        'author': author[0],
        'likes': author[1]
      }
    ))
    .sort((a, b) => a.likes - b.likes)
  return topLikesAuthor[topLikesAuthor.length - 1]
}

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
