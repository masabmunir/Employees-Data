let express = require('express');
let app = express();
const bodyParser = require('body-parser');
let cors = require('cors');
const UserRoutes = require('./routes.js')
const createConnection = require("./DB/connection");



app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

let allowCrossDomain = function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', "*")

}

app.use(cors({allowCrossDomain}))

app.use(bodyParser.json());


app.use('/users',UserRoutes)

let PORT = process.env.port || 8000

createConnection().then(() => {
    console.log('Database connected successfully')
    app.listen(PORT, () => {
        console.log('Server is running at ', PORT)
    })
}).catch((err) => {
    console.log("Database connection failed", err)
})

