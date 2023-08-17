import * as Yup from "yup";

export  const signUpSchema = Yup.object({
     firstname : Yup.string().min(2).max(25).required("please enter your name"),
    
     lastname : Yup.string().min(2).max(25).required("please enter your last name"),
     number : Yup.string().min(10).max(12).required("please enter your number"),
     message : Yup.string().min(2).max(50).required("please enter your message"),
     email: Yup.string().email().required("please enter your email"),
    
})