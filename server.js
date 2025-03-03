import express from 'express'

const app = express()

app.get('/health-check', (req, res) => {
  res.send({ message: 'app is healthy and tested' })



  
})

app.listen(3000, () => {
  console.log('app is running')
})
