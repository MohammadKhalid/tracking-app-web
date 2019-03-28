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

// ----------- web apis
app.use('/api/web/admin', require('./routes/web/admin'))
app.use('/api/web/employee', require('./routes/web/Employee'))
app.use('/api/web/task', require('./routes/web/Tasks'))


// ------------ mobile apis
app.use('/api/mobile/admin', require('./routes/mobile/admin'))
app.use('/api/mobile/employee', require('./routes/mobile/Employee'))
app.use('/api/mobile/task', require('./routes/mobile/Tasks'))



app.listen(port, () => console.log(`server listening on port ${port}`));

