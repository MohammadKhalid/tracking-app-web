const express = require('express');
const app = express();
require('dotenv').config()
const bodyparser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors');
const db = require('./config/database')

const admin = require('./api/admin/admin.routes')
const user = require('./api/user/user.routes')
const attendance = require('./api/attendance/attendance.routes')
const task = require('./api/task/task.routes')
const personal = require('./api/personalNotes/personalNotes.routes')
const tracking = require('./api/tracking/tracking.routes')

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