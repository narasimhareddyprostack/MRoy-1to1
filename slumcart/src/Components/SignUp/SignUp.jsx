import React, { Component } from 'react'
import FormInput from '../Form-Input/FormInput'
import './SignUp.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import Custombuttom from '../custom-buttons/customButtom'

export default class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    handlesubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("Password don't match");
            return
        }
        try {
            const { user } = auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error)
        }
    }
    handleOnchange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handlesubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleOnchange}
                        label='Display Name'
                        required />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleOnchange}
                        label='Email'
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleOnchange}
                        label='Password'
                        required />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleOnchange}
                        label='Confirm Password'
                        required />
                    <Custombuttom type='submit'>Sign Up</Custombuttom>
                </form>
            </div>
        )
    }
}
