import Person from "../models/person.js"
import express from "express"

const personsRouter = express.Router()
// ~ Get all persons
personsRouter.get("/", (req, res, next) => {
  Person.find({}).then(persons => {
    return res.status(200).json(persons).end()
  }).catch(error => next(error))
})

// ~ Get info
personsRouter.get("/info", (req, res, next) => {
  Person.find({}).then(persons => {
    const entries = Object.entries(persons)
    const today = new Date()
    const infoPage = `<p>Phonebook has info for ${entries.length} people</p><p>${today}</p>`
    return res.send(infoPage).end()
  }).catch(error => next(error))
})

// ~ Get person by id
personsRouter.get("/:id", (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
      return res.json(person).end()
    } else {
      return res.status(404).send(`Number by id "${req.params.id}" is not found`).end()
    }
  }).catch(error => next(error))
})

// ~ Remove person by id
personsRouter.delete("/:id", (req, res, next) => {
  console.log(req.params.id)
  Person.findByIdAndDelete(req.params.id).then(person => {
    if (person === null) return res.status(404).send(`Number by id ${req.params.id} is not found`).end()
    else return res.status(204).send(`Person with id: ${req.params.id} was deleted successfully`).end()
  }).catch(error => next(error))
})

// ~ Create person by id
personsRouter.post("/", (req, res, next) => {
  const data = req.body
  const newNumber = new Person({
    name: data.name,
    number: data.number,
  })

  newNumber.save()
    .then(p => res.json(p).end())
    .catch(error => next(error))
})

// ~ Update person by id
personsRouter.put("/:id", (req, res, next) => {
  const data = req.body
  const newNumber = {
    name: data.name,
    number: data.number,
  }

  Person.findByIdAndUpdate(req.params.id, newNumber, { new: true, runValidators: true, context: "query" })
    .then(person => {
      if (person === null) return res.status(404).send(`Number by id ${req.params.id} is not found`).end()
      else return res.json(person).end()
    }).catch(error => next(error))
})
// ~~~ END OF ROUTES ~~~

export default personsRouter
