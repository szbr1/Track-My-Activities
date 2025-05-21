import express from 'express'

const route = express.Router()

route.post('/status', status)

export default route