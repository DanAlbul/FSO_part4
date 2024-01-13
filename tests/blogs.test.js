const listHelper = require('../utils/list_helper')

describe('total likes of several blogs', () => {
  test('total likes check', () => {
    const blogs = [
      {
        id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 122,
      },
      {
        id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 107,
      },
    ]
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(229)
  })

  test('new blog with 0 likes', () => {
    const blogs = [
      {
        id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
      },
    ]
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })

  test('single blog with some likes', () => {
    const blogs = [
      {
        id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 73,
      },
    ]
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(73)
  })

  test('new blog without likes data', () => {
    const blogs = [
      {
        title: "How to Cook",
        author: "Fernando Varis",
        url: "https://www.google.com/howtocook",
        id: "659a9919bb3ae892c757a944"
      }
    ]
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })

  test('favorite blog check', () => {
    const blogs = [
      {
        "title": "How to Cook",
        "author": "Fernando Varis",
        "url": "https://www.google.com/howtocook",
        "likes": 12,
        "id": "659a9919bb3ae892c757a944"
      },
      {
        "title": "How to Write Code",
        "author": "Daniel Albs",
        "url": "https://www.google.com/write-code-albs",
        "likes": 23,
        "id": "659a9960bb3ae872c757a948"
      },
      {
        "title": "Hasdas Root",
        "author": "Danis ddsd",
        "url": "https://www.ggle.com/wrte-code-albs",
        "likes": 18,
        "id": "659a9960bb3ae876c757a948"
      }
    ]
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      "title": "How to Write Code",
      "author": "Daniel Albs",
      "likes": 23,
    })
  })

  test('author with most number of blogs', () => {
    const blogs = [
      {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a412b3a1b5dt676234d17f9",
        title: "Canoxical reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexds.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 31,
        __v: 0
      },
      {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
      },
      {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      },
      {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
      },
      {
        _id: "5a422b3a1b5ds676234d17f9",
        title: "Canoxical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 11,
        __v: 0
      },
      {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
      }
    ]
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', blogs: 4 })
  })

  test('top author by total likes', () => {
    const blogs = [
      {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
      },
      {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      },
      {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
      },
      {
        _id: "5a422b3a1b5ds676234d17f9",
        title: "Canoxical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 11,
        __v: 0
      },
      {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
      }
    ]
    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', likes: 28 })
  })
})
