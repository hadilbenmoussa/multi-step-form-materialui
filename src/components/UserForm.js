import React, { Component } from 'react'
// in react we choose between functional and class components 
// based on considerations : lifecycle methods and state are only handled by classes 
//functional components are faster and lightweight and reusable 
//chnouma lifecycle methods : houma des methodes eli indiquent specific points in a component's lifecylce
// like when a component is updated , mounted(created), unmounted 
import FormUserDetails from './FormUserDetails';
import FormPersonalUserDetails from './FormPersonalUserDetails';
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city : '',
        bio: ''
    }
    // in react or in javascript we use this syntax const{ name } = to destructure a property from 
    // an object and we can after refer to it with its name instead of props.name
    //from a state or another object

    // go to next step
    nextStep= ()=>{
        const { step } =this.state;
        this.setState({
            step:step+1
        });

    }

    // go back to prev step
    prevStep= ()=>{
        const { step } =this.state;
        this.setState({
            step:step-1
        });

    }

    // handle fields change 
    handleChange = (input)=>(e)=>{
        this.setState({[input]:e.target.value});
}


  render() {

    //destructuring values 

    const {step} = this.state;
    const {firstName, lastName,email,occupation,city,bio}= this.state;
    const values= {firstName, lastName,email,occupation,city, bio};
    
    switch (step){
        case 1: return (<FormUserDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}/>);
        case 2: 
           return (
            <FormPersonalUserDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
        />);
        case 3:
           return (
            <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            />);

        case 4: return <Success/>;
        default: return ;

    }

  }
}

export default UserForm
