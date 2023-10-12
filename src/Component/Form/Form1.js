import React from 'react'
import {useFormik} from "formik"
import { signUpSchema } from './Shcema'
import axios from "axios"

const initialValues ={
    firstname:"",
    lastname:"",
    number:"",
     message:"",
    email:""
    
  }

function Form1() {

    const {values,errors, touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit :(values, action)=>{
          axios.post("https://dummyjson.com/products/add",values)
          .then(res=>console.log(res.data))
            action.resetForm()
        }
           


})


  return (
    <div>
    <form onSubmit={handleSubmit} >

    <div className="bannercs" style={{marginLeft:60,marginTop:30}}>
    <p><span className="wpcf7-form-control-wrap" style={{color:"white"}} data-name="lastname"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="First Name*" value={values.firstname} type="text" name="firstname"  onChange={handleChange} onBlur={handleBlur}/>{errors.firstname && touched.firstname ? errors.firstname :null}</span>
    </p>
    <p><span className="wpcf7-form-control-wrap" style={{color:"white"}} data-name="lastname"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Last Name*" value={values.lastname} type="text" name="lastname"  onChange={handleChange} onBlur={handleBlur}/> {errors.lastname && touched.lastname ? errors.lastname :null}</span>
    </p>
    <p><span className="wpcf7-form-control-wrap" style={{color:"white"}} data-name="email-838"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" value={values.email} type="email" name="email"  onChange={handleChange} onBlur={handleBlur}/> {errors.email && touched.email ? errors.email :null}</span>
    </p>
    <p><span className="wpcf7-form-control-wrap" style={{color:"white"}} data-name="mobile"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Mobile/Skype" value={values.number} type="text" name="number" onChange={handleChange} onBlur={handleBlur}/>{errors.number && touched.number ? errors.number :null}</span>
    </p>
    <p><span className="wpcf7-form-control-wrap" style={{color:"white"}} data-name="message"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Message" value={values.message} type="text" name="message"  onChange={handleChange} onBlur={handleBlur}/>{errors.message && touched.message ? errors.message :null}</span>
    </p>
    <div id="cf7sr-64ca38cd1b7ee" className="cf7sr-g-recaptcha" data-sitekey="6LcJ-rwZAAAAANzxYotfqOGF1y7XKP2HWh-9BDdn"><div style={{width: 304, height: 78}}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcJ-rwZAAAAANzxYotfqOGF1y7XKP2HWh-9BDdn&amp;co=aHR0cHM6Ly9hZ25pdG90ZWNobm9sb2dpZXMuY29tOjQ0Mw..&amp;hl=en&amp;v=pCoGBhjs9s8EhFOHJFe8cqis&amp;size=normal&amp;cb=dpu5tflxwejo" width="304" height="78" role="presentation" name="a-dmfc8sdgv6qg" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"></iframe></div></div></div>
    
    <p style={{marginTop:10}}><input className="wpcf7-form-control has-spinner wpcf7-submit" type="submit" value="Submit"/>
    </p>
    </div>
    </form>
        
    </div>
  )
}

export default Form1