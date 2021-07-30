import React ,{useState}from 'react'
import './createcoupan.css'
import axios from 'axios'
import { useToasts } from "react-toast-notifications";
import {useHistory} from 'react-router-dom'
const CreateCoupan = () => {
    const [formData, setFormData] = useState({
        code:'',
        discount:''
    })

    const {addToast}=useToasts()
    const history=useHistory()
    const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const checkEmptiness=()=>{
    if(formData.code.length && formData.discount){
      handleSubmit()
       addToast('Coupan has been set successfully', {
        appearance: 'info',
        autoDismiss: true,
      });
    }
    else{
      addToast('All fields are required', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }
  const handleSubmit=async()=>{
    const res=await axios.post("/api/coupancreate",formData)
    if(res.data){
      history.push('/adminpanel')
    }
    
  }
    return (
        <div>
   <div class="wrapper fadeInDown">
  <div id="formContent">


    <div class="fadeIn first">
      <h2>Paradis Parking</h2>
    </div>


    <div>
      <input type="text" id="code" value={formData.code} onChange={changeHandler} class="fadeIn second" name="code" placeholder="Enter coupan code"/>
      <input type="text" id="discount" value={formData.discount} onChange={changeHandler} class="fadeIn third" name="discount" placeholder="Enter Discount value"/>
      {/* <input type="submit"  class="fadeIn fourth" value="Create Coupan"/> */}
      <button type="button" class="btn btn-primary" style={{padding:'10px',margin:'10px'}} onClick={checkEmptiness}>Create Coupan</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default CreateCoupan
