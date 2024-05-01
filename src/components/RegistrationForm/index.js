// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isFirstNameEmpty: false,
    firstNameInput: '',
    isLastNameEmpty: false,
    lastNameInput: '',
    success: false,
  }

  onUpdateFName = e => {
    this.setState({firstNameInput: e.target.value})
  }

  onBlurFirstName = () => {
    const {firstNameInput} = this.state
    if (firstNameInput === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
  }

  onUpdateLName = e => {
    this.setState({lastNameInput: e.target.value})
  }

  onBlurLastName = () => {
    const {lastNameInput, firstNameInput} = this.state
    if (firstNameInput === '') {
      this.setState({isFirstNameEmpty: true})
    }
    if (lastNameInput === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
  }

  checkCredentials = e => {
    e.preventDefault()
    const {firstNameInput, lastNameInput} = this.state
    if (firstNameInput === '') {
      this.setState({isFirstNameEmpty: true})
    }
    if (lastNameInput === '') {
      this.setState({isLastNameEmpty: true})
    }
    if (firstNameInput !== '' && lastNameInput !== '') {
      this.setState({success: true})
    }
  }

  success = () => {
    const {success, isFirstNameEmpty, isLastNameEmpty} = this.state
    if (success === true) {
      return (
        <form className="form-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-img"
          />
          <p className="success-text">Submitted Successfully</p>
          <button type="submit" className="submit-but">
            Submit Another Response
          </button>
        </form>
      )
    }
    return (
      <form className="form-con" onSubmit={this.checkCredentials}>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className="inp-con"
          placeholder="First name"
          onChange={this.onUpdateFName}
          onBlur={this.onBlurFirstName}
        />
        {isFirstNameEmpty && <p className="error">Required</p>}
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="inp-con"
          placeholder="Last name"
          onChange={this.onUpdateLName}
          onBlur={this.onBlurLastName}
        />
        {isLastNameEmpty && <p className="error">Required</p>}
        <button className="submit-but" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {lastNameInput} = this.state

    return (
      <div className="main-con">
        <h1 className="head">Registration </h1>
        {this.success()}
      </div>
    )
  }
}

export default RegistrationForm
