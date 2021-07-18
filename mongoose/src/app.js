const mongoose = require("mongoose");

// connection creation
mongoose
  .connect("mongodb://localhost:27017/youtube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection success!");
  })
  .catch((err) => console.error);

const playlistSchema = new mongoose.Schema({
  name: { 
      type: String,
      required: true
    },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection creation
const Playlist = new mongoose.model('Playlist',playlistSchema)


// create / insert a document
const createDoc = async () => {
   try{
    const reactPlaylist = new Playlist({
        name: "node js",
        ctype: "backend",
        videos: "50",
        author: "mihir",
        active: true,
    })
    const result = await reactPlaylist.save();
    console.log(result)
   }
   catch(err){
       console.log(err)
   }
    
}
createDoc();

