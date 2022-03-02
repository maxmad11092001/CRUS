const dbURL = 'mongodb+srv://maxmad:11092001@cluster0.fkkkr.mongodb.net/test'
const mongoose = require('mongoose')
async function connect(){
    try {
        //await co nghia la phai chay dc moi toi  successfully
        await mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        console.log('Connect Successful')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect}