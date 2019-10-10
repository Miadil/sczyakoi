import React from "react"
import logo from "../logo.svg"
import "./Header.css"

class Header extends React.Component {
  state = {
    status: false,
    text: ""
  }
  handleClick = () => {
    this.setState({
      status: !this.state.status
    })
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
    console.log("choupi", this.state.text)
  }

  render() {
    // console.log(this)
    const { name, id, school } = this.props
    // const name = this.props.name
    // const id = this.props.id
    // const school = this.props.school
    return (
      <div>
        <header className="header-header">
          <img src={logo} className="header-logo" alt="logo" />
          <input type="button" value="login" onClick={this.handleClick} />
          <p> status : {this.state.status ? "Connected" : "Not connected"} </p>
          {this.state.text}
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <p>name {name}</p>
          <p>id {id}</p>
          <p>school {school}</p>
          <a
            className="header-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default Header
