import React ,{useState}from 'react'
import './createcoupan.css'
import axios from 'axios'
const CreateCoupan = () => {
    const [formData, setFormData] = useState({
        code:'',
        discoint:''
    })
    const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit=async()=>{
    const res=await axios.post("/api/coupancreate",formData)
    console.log(res)
  }
    return (
        <div>
   <div class="wrapper fadeInDown">
  <div id="formContent">


    <div class="fadeIn first">
      <h2>Paradis Parking</h2>
    </div>


    <form onSubmit={handleSubmit}>
      <input type="text" id="code" value={formData.code} onChange={changeHandler} class="fadeIn second" name="code" placeholder="Enter coupan code"/>
      <input type="text" id="discount" value={formData.discount} onChange={changeHandler} class="fadeIn third" name="discount" placeholder="Enter Discount value"/>
      <input type="submit"  class="fadeIn fourth" value="Create Coupan"/>
    </form>
  </div>
</div>
        </div>
    )
}

export default CreateCoupan
