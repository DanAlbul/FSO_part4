import Blog from "../models/blog.js"
import express from "express"

const blogsRouter = express.Router()

// ~ Get all blogs
blogsRouter.get("/", (req, res, next) => {
  Blog
    .find({})
    .then(blogs => {
      return res.status(200).json(blogs).end()
  }).catch(error => next(error))
})

// ~ Get blog by id
blogsRouter.get("/:id", (req, res, next) => {
  Blog
    .findById(req.params.id).then(blog => {
      if (blog) return res.json(blog).end()
      else return res.status(404).send(`Blog by id "${req.params.id}" is not found`).end()
  }).catch(error => next(error))
})

// ~ Remove blog by id
blogsRouter.delete("/:id", (req, res, next) => {
  console.log(req.params.id)
  Blog
    .findByIdAndDelete(req.params.id).then(blog => {
      if (blog === null) return res.status(404).send(`Blog by id ${req.params.id} is not found`).end()
      else return res.status(204).send(`Blog with id: ${req.params.id} was deleted successfully`).end()
  }).catch(error => next(error))
})

// ~ Create blog by id
blogsRouter.post("/", (req, res, next) => {
  const newBlog = new Blog(req.body)

  newBlog
    .save()
    .then(nb => res.status(201).json(nb).end())
    .catch(error => next(error))
})

// ~ Update blog by id
blogsRouter.put("/:id", (req, res, next) => {
  const data = req.body
  const updatedBlog = {
    title: data.title,
    author: data.author,
    url: data.url,
    likes: data.likes
  }

  Blog
    .findByIdAndUpdate(req.params.id, updatedBlog, { new: true, runValidators: true, context: "query" })
    .then(blog => {
      if (blog === null) return res.status(404).send(`Blog by id ${req.params.id} is not found`).end()
      else return res.json(blog).end()
    }).catch(error => next(error))
})
// ~~~ END OF ROUTES ~~~

export default blogsRouter
