const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://bathiya:1234db@cluster0.iknw1.mongodb.net/dataMaster?retryWrites=true&w=majority',{
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