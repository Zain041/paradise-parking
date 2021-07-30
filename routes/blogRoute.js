const express = require("express");
const router = express.Router();
const path = require("path");
const Blog = require("../Models/blog");
const Comment=require("../Models/comment")
const cloudinary = require("cloudinary").v2;
const User = require("../Models/User")
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

const storageEngine = multer.diskStorage({
  destination: './public/uploads/categories/',
  filename: function (req, file, fn) {
    fn(null, req.body.categoryName + path.extname(file.originalname)); //+'-'+file.fieldname
  }
});
//init
const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 200000 },
  fileFilter: function (req, file, callback) {

    validateFile(file, callback);
  }
}).single('avatar');
var validateFile = function (file, cb) {
  allowedFileTypes = /jpeg|jpg|png|gif/;
  const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedFileTypes.test(file.mimetype);
  if (extension && mimeType) {
    return cb(null, true);
  } else {
    cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
  }
}
cloudinary.config({
  cloud_name: "parking-app041",
  api_key: "522187368244197",
  api_secret: "_kgRpudcOL1CAy5McIDv-KVLNlk",
});

router.post("/createpost", async (req, res) => {
 

  upload(req, res, async (error) => {
    const {  title, description } = req.body;

    if (error) {
      let msg = null;
      if (error.message) msg = error.message;
      else msg = error;
      return res.status(400).json({ errors: [{ msg: msg }] });
    } else {
      if (req.file == undefined) {
        return res
          .status(404)
          .json({ errors: [{ msg: "Image does not exist" }] });
      } else {
        try {
          // if user exist
          var image = null;
          
        await cloudinary.uploader.upload( 
          req.file.path,
          {
            resource_type: "image",
            public_id: "blogImages/"  + uuidv4(),
            chunk_size: 6000000,
          },
          function (error, result) {
            image = result;
          },
         
        );
        const avatar=image.url;
      
      
      
          const newObject = new Blog({
            imageUrl: avatar,
            title:title,
            desc: description,
          });
          await newObject.save();
          res.send({ newObject });
        } catch (err) {
          console.log(err)
          return res.status(500).send("Server Error");
        }
      }
    }
    
  })
  
});


router.post("/addComment", async (req, res) => {
 

 
    const {  description, userId,postId } = req.body;

        try {
          // if user exist

          const user=  await User.findOne({_id:userId})
          if(user){
            const newObject = new Comment({
              postId:postId,
              imageUrl: user.imageUrl,
             userName:user.name,
              desc: description,
            });
            await newObject.save();
            res.send({ newObject });
          }else{
            res.send({ error:"user does not exist" });
          }
          
      
      
      
         
        } catch (err) {
          console.log(err)
          return res.status(500).send("Server Error");
        }
      
    
    
 
  
});
router.get("/getComments", async (req, res) => {
  try {
    const allcomment = await Comment.find();
    res.json({ allcomment });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

router.get("/getpost", async (req, res) => {
  try {
    const allpost = await Blog.find();
    res.json({ allpost });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

router.get("/getpost/:id", async (req, res) => {
  const postid = req.params.id;
  console.log(postid);
  try {
    const post = await Blog.findById({ _id: postid });
    res.json({ post });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

router.delete("/getpost/:id", async (req, res) => {
  const postid = req.params.id;
  console.log(postid);
  try {
    const allpost = await Blog.findByIdAndDelete({ _id: postid });
    res.json({ msg: "Post has been deleted" });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

router.patch("/getpost/:id", async (req, res) => {
  try {
    const { image, title, description } = req.body;

    const post = await Blog.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        desc: description,
        imageUrl: image,
      }
    );
    //   .populate("user likes", "avatar username fullname")
    //   .populate({
    //     path: "comments",
    //     populate: {
    //       path: "user likes",
    //       select: "-password",
    //     },
    //   });

    res.json({
      msg: "Updated Post!",
      newPost: {
        // ...post._doc,
        title,
        image,
        description,
      },
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
