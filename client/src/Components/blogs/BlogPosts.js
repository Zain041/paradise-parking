 
 import Header from '../HomePage/Header'
 import {useEffect,useState} from 'react'
 import axios from 'axios'
 
 
 function BlogPosts() {

    const [blogs,setBlogs]=useState([]);
    const [comments,setComments]=useState([])
   const [description,setDescription]=useState("")

    useEffect(() => {

        async function fetchPosts() {
            const res =  await axios.get("/api/getpost");
            console.log(res)
            if(res){
                setBlogs(res.data.allpost)
            }
          }
          
       
          async function fetchComments() {
            const res =  await axios.get("/api/getComments");
            console.log(res)
            if(res){
                setComments(res.data.allcomment)
            }
          }
          fetchPosts()
          fetchComments()
       
      }, []);
      
console.log(blogs)
console.log(comments)
    return (
        <div style={{backgroundColor:'#56BAED'}}>
            
            <div style={{backgroundColor:'#56BAED',marginTop:'50px'}} class="container">
                {blogs.map((item,index)=>{
                    return(
                        <div key={index} style={{backgroundColor:'#fff',marginBottom:'20px'}} class="well">
      <div class="media">
      	<a class="pull-left" href="#">
    		<img class="media-object" src={item.imageUrl}/>
  		</a>
  		<div class="media-body">
    		<h4 class="media-heading">{item.title}</h4>
       
          <p>{item.desc}</p>
          
            
       </div>
    </div>
    <div>
    <h5>Comments</h5>
        {comments.filter(coment=>coment.postId==item._id).map((items,index)=>{
            return(
<div class="media">
      	<a class="pull-left" href="#">
    		<img class="media-object" src={items.imageUrl}/>
  		</a>
  		<div class="media-body">
    		<h4 class="media-heading">{items.userName}</h4>
       
          <p>{items.desc}</p>
          </div>
         
          </div>
            )
        }

        )}

<h5>Add Comment</h5>
        <input type="text" placeholder="Add Comment" name="description" value={description} onChange={(e)=>{
            setDescription(e.target.value)
        }}/>

        <button onClick={(e)=>{
            e.preventDefault()
            var user = JSON.parse(sessionStorage.getItem('user'))
            const obj={
                description:description,
                postId:item._id,
                userId:user.id
            }
           axios.post("api/addComment",obj).then(
            
            async function fetchComments() {
                const res =  await axios.get("/api/getComments");
                console.log(res)
                if(res){
                    setComments(res.data.allcomment)
                    setDescription("")
                   
                }
              }
           )
        }}>Comment</button>
        
        
        
          
            
       
    
        
    </div>
  </div>
  
                    )
                })}
                </div>
  
 </div>
            
        
    )
}

export default BlogPosts
