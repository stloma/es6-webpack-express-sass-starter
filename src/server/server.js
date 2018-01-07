import express from 'express'

const app = express()
const routes = express.Router()

routes.get('/test', async (req, res) => {
  res.status(200).json({ status: 'success' })
})

app.use('/api', routes)

app.listen(3000, () => console.log('Listening on port 3000'))
