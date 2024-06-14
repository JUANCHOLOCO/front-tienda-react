import { Button, TextField } from "@mui/material"
import { Formik } from "formik";
import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const FormLogin = () => {
    
    const initialValues = {user: '', password: ''}

    const SignUpSchema = Yup.object().shape({
        user: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    const history = useHistory()

   
  return (
    <div>

    <Formik
       initialValues={initialValues}
       validationSchema={SignUpSchema}
       onSubmit={(values, { setSubmitting }) => {
         console.log(values)
         history.push("/store")
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "10px",
         }}>

        <TextField
            onChange={handleChange}
            value={values.user}
            onBlur={handleBlur}
            name='user'
            id="outlined-required"
            label="Usuario"

            />

        {errors.user && touched.user && errors.user}
        <TextField
            name="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />

           {errors.password && touched.password && errors.password}
           <Button variant="contained" onClick={(e: FormEvent<HTMLFormElement>) => {
            handleSubmit(e)

           }}>
             Iniciar Sesion
           </Button>
         </form>
       )}
     </Formik>


        


    </div>
  )
}

export default FormLogin
