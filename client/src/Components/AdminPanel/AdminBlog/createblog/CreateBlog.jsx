import React,{useState} from 'react'
import axios     from 'axios'
import {Redirect} from 'react-router-dom'
const CreateBlog = () => {
    const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangeThumbnail = (e) => {
    const target = e.target;
    const files = target.files;
    if (files) {
      const file = files[0];
      setFormData({ ...formData, image: file });
    }
  };
  const handleSubmit = async () => {
    const res = await axios.post("/api/createpost", formData);
    // if(res){
    //   <Redirect to='/adminpanel'/>
    //   console.log('redirect')
    // }
  };

    return (
        <div>
             <div class="container">
        <div class="main">
          <div class=" col-md-offset-2">
            <h1>Create post</h1>

            <form onSubmit={handleSubmit} method="POST">
              <div class="form-group has-error">
                {/* <label for="slug">
                  Slug <span class="require">*</span>{" "}
                  <small>(This field use in url path.)</small>
                </label>
                <input type="text" class="form-control" name="slug" />
                <span class="help-block">Field not entered!</span> */}
                <p>Select image</p>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  accept="image/*"
                  onChange={handleChangeThumbnail}
                />
              </div>

              <div class="form-group">
                <label for="title">
                  Title <span class="require">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  value={formData.title}
                  onChange={changeHandler}
                />
              </div>

              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  rows="5"
                  class="form-control"
                  name="description"
                  value={formData.description}
                  onChange={changeHandler}
                ></textarea>
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-primary">
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    )
}

export default CreateBlog
