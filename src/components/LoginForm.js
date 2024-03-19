import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../api/axiosConfig';


function LoginForm() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const allVal = { email: user.email, password: user.password};

        try {
            const response = await api.post('/api/v1/register',{});
            console.log(response.data);
            //const singleMovie = response.data;
            
            //setMovie(singleMovie);
            
            //setReviews(singleMovie.reviewIds);
            
          } catch (err) {
            console.log(err);
            
          }

        console.log(allVal);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name = "email" placeholder="Enter email" value={user.email} onChange={handleInput}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name = "password" placeholder="Password" value={user.password} onChange={handleInput}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="submit"> Login</Button>
                        <Button variant="primary" type="submit"> Register</Button>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default LoginForm;