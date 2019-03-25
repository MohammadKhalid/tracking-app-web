const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = process.env.PORT || 3000
const db = require('./config/database');
const user = require('./Models/Admin')
const attendence = require('./Models/Attendence')
const tracking = require('./Models/Tracking')
const roles = require('./Models/roles')
const persnolnotes = require('./Models/PersnolNotes')
const schedule = require('./Models/schedule')
const userRoles = require('./Models/userRole')
const cors = require('cors');

 

app.use(bodyparser.json());

db.authenticate()
.then(()=>{
    console.log(' mysql done.');
}).catch(err=>{
    console.log('unable to connect', err)
})
app.use(cors());

app.get('/test',(req,res)=>{
    res.send('hello World')
})

app.use('/api/admin', require('./routes/admin'))
app.use('/api/employee', require('./routes/Employee'))
app.listen(port, () => console.log(`server listening on port ${port}`));

