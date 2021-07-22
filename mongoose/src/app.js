const mongoose = require("mongoose");
const validator = require ("validator");
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

//   schema definetion
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,

  },
  ctype: {
    type: String,
    required: true,
    lowercase: true,
    enum:["frontend","backend","database"]
  },
  videos: {
    type:Number,
    validate(value){
      if (value<0){
        throw new Error("Videos should not be negative!!!")
      }
    }
  },
  author: String,
  email: {
    type:String,
    required: true,
    unique: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("email is invalid")
      }
    }
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create / insert a document
const createDoc = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: " js",
      ctype: "frontend",
      videos: "100",
      author: "mihir",
      active: true,
    });

    const mongoPlaylist = new Playlist({
      name: "mongoDB",
      ctype: "database",
      videos: "5",
      author: "mihir",
      active: true,
    });

    const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// createDoc();

// finding documents into db collection
// const getDocument = async () => {
  // const result = await Playlist.find({ctype:"frontend"})
  // .select({
  //   name:1,
  // });

// comparison operator
//   const result = await Playlist.find({ ctype: "frontend", videos:{$gte:50} }).select({
//     name: 1,
//   });
//   console.log(result);
// };

//   const result = await Playlist.find({ ctype: {$in:['database','backend']},}).select({
//     name: 1,
//   });
//   console.log(result);
// };

//   const result = await Playlist.find({ author: "mihir"}).select({
//     name: 1,
//   }).sort({name:-1})
//   // .countDocuments();
//   console.log(result);
// };

// getDocument();

// updating document

// const updateDoc = async (_id) => {
// try{
//   const result = await Playlist.findOneAndUpdate({_id},{
//     $set:{
//       name:"mongoDB"
//     }},{
//       new:true,
//       useFindAndModify:false
//     }
//   )
//   console.log(result)
// }
// catch(err){
//   console.log(err)
// }
// }

// updateDoc("60f53e600817c02ca8562e61");

// deleting the documents


const deleteDoc = async (_id) => {
  try{
   const result = await Playlist.findByIdAndDelete({_id});
   console.log(result);
  }
  catch(err){
    console.log(err)
  }
}
// deleteDoc("60f67c238abb952f685074d6");





const insertDoc = async()=>{
  try{
    const css = new Playlist({
      name : "django",
      ctype: "backend",
      videos: 60,
      author: "mihir",
      email: "thisko@gmail.com",
      active: true
    })

    const result = await css.save();
  }
  catch(err){
    console.log(err);
  }
}
insertDoc();