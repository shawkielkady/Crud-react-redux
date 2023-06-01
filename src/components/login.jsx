import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
const formSchema=yup.object().shape({
    userName: yup.string().min(8).max(20).required('insert valid user name'),
    password: yup.string().min(8).max(20).required('insert valid password'),

})
const Login=()=>{
    const navigate=useNavigate()
    const formik= useFormik({
        initialValues: {userName:'',password:''},
        enableReinitialize:true,
        validationSchema:formSchema,
        onSubmit:()=>{navigate('/')}
    })
    return(
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control 
            name='userName' 
            type="text"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.userName}
            isInvalid={!!formik.errors.userName}
            />
           <Form.Control.Feedback type='invalid'>
            {formik.errors.userName}
           </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password'  
                type="text"
                placeholder="Password"  
                value={formik.values.password} 
                onChange={formik.handleChange}
                 isInvalid={!!formik.errors.password}   
                />
            <Form.Control.Feedback type='invalid'>
            {formik.errors.password}
           </Form.Control.Feedback>    
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>   
         )
    }
export default Login;