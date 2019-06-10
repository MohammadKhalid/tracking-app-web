const express = require('express');
const app = express();
require('dotenv').config()
const bodyparser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors');
const db = require('./Config/database')

const admin = require('./Api/Admin/admin.routes')
const user = require('./Api/User/user.routes')
const attendance = require('./Api/Attendance/attendance.routes')
const task = require('./Api/Task/task.routes')
const personal = require('./Api/Personal Notes/personal-notes.routes')
const tracking = require('./Api/Tracking/tracking.routes')

app.use(bodyparser.json());
app.use(cors());

db.authenticate()
.then(()=>{
    console.log(' mysql done.');
}).catch(err=>{
    console.log('unable to connect', err)
})



app.get('/test',(req,res)=>{
    
})

app.use('/api/admin',admin)
app.use('/api/user',user)
app.use('/api/task',task)
app.use('/api/attendance',attendance)
app.use('/api/tracking',tracking)
app.use('/api/notes',personal)

app.listen(port, () => console.log(`server listening on port ${port}`));