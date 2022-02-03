const mongoose = require('mongoose')

mongoose.connect('<Change_this_connect_link>',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},(error) => {
    if (error){
        return console.log(error.message);
    }

    console.log('Database has been connected!');
})
