const getAllTeachers = async (req, res, next) => {
  res.send('Get all teachers')
}
const create = async (req, res, next) => {
  res.send('Creating techer')
}

const getById = async (req, res, next) => {
  res.send('get by id teacher')
}
module.exports = {getAllTeachers, create, getById}
