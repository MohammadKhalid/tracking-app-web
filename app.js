const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors');
const db = require('./Config/database')

const admin = require('./Api/Admin/admin.routes')
const user = require('./Api/User/user.routes')
const attendance = require('./Api/Attendance/attendance.model')
const task = require('./Api/Task/task.model')
const personal = require('./Api/Personal Notes/personal-notes.model')
const tracking = require('./Api/Tracking/tracking.model')

app.use(bodyparser.json());
app.use(cors());

db.authenticate()
.then(()=>{
    console.log(' mysql done.');
}).catch(err=>{
    console.log('unable to connect', err)
})



app.get('/test',(req,res)=>{
    res.send('hello World')
})

app.use('/api/admin',admin)
app.use('/api/user',user)

app.listen(port, () => console.log(`server listening on port ${port}`));