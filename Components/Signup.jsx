
import { useFormik } from 'formik';
import userSchema from './validation';
function Signup() {
    const { handleSubmit, handleChange, values, errors, touched ,handleBlur} = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordCheck: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: userSchema,
    });
    console.log(errors);
    return (
        <>
            <h1>Sign Up  </h1>
            <form onSubmit={handleSubmit} className='form-grid'>
                
                <label htmlFor="email">Email</label>
                <input type="email" 
                    name="email" 
                    value={values.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    />  
                {touched.email && errors.email ? 
                    <div  className='error_message'>{errors.email}</div> :
                    null}
                    <br />

                <label htmlFor="password">Password</label>
                <input type="password" 
                    name="password" 
                    value={values.password} 
                    onChange={handleChange}
                    onBlur={handleBlur} />
                
                { touched.password &&  errors.password ? 
                    <div className='error_message'>{errors.password}</div> :
                    null}
                    <br />

                <label htmlFor="passwordCheck">Password Check</label>
                <input type="password" 
                    name="passwordCheck" 
                    value={values.passwordCheck} 
                    onChange={handleChange} 
                    onBlur={handleBlur}/>
                
                {touched.passwordCheck &&  errors.passwordCheck ? 
                    <div className='error_message'>{errors.passwordCheck}</div> : 
                    null}


                <button type="submit">Sign Up</button>
                
                <code>{JSON.stringify(values)}</code>


            </form>


        </>
    )
}

export default Signup