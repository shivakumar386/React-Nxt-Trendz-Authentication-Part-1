// import {Component} from 'react'
// import './index.css'

// class LoginForm extends Component {
//   state = {username: '', password: '', para: ''}

//   onSubmitSuccess = () => {
//     const {history} = this.props
//     history.replace('/')
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   onSubmitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state

//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data)
//     if (response.ok === true) {
//       this.onSubmitSuccess()
//     } else {
//       this.setState({para: "username and password didn't match"})
//     }
//   }

//   render() {
//     const {para} = this.state
//     return (
//       <div className="login-bg-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//           alt="website login"
//           className="login-image"
//         />
//         <form className="form-elements" onSubmit={this.onSubmitForm}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             alt="website logo"
//             className="logo"
//           />
//           <label className="inputs" htmlFor="username">
//             USERNAME
//           </label>
//           <input
//             className="labels"
//             type="text"
//             id="username"
//             placeholder="Username"
//             onChange={this.onChangeUsername}
//           />
//           <label className="inputs" htmlFor="password">
//             PASSWORD
//           </label>
//           <input
//             className="labels"
//             type="password"
//             id="password"
//             placeholder="Password"
//             onChange={this.onChangePassword}
//           />
//           <button className="login-button" type="submit">
//             Login
//           </button>
//           <p className="error-message">{para}</p>
//         </form>
//       </div>
//     )
//   }
// }

// export default LoginForm

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
