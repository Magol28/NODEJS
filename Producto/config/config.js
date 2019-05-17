process.env.PORT = process.env.PORT || 3000
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//database
let urldb = "";

urldb = 'mongodb+srv://magol28:S3aThiq7mx7PVgQ@cluster0-p8ohi.mongodb.net/cafe'

process.env.URLDB = urldb;