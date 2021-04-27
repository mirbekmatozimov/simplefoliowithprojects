import express from "express"

const app = express()
const port = process.env.PORT

app.use(express.static("public"))

app.get('/', (req, res)=>{res.sendFile('/index.html')})

app.listen(port || 3000)


