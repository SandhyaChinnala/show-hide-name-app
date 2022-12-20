// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    // let nameBox
    // if (showFirstName) {
    //   nameBox = <p className="names">Joe</p>
    // }

    // let lastName
    // if (showLastName) {
    //   lastName = <p className="names">Jonas</p>
    // }

    return (
      <div className="app-container">
        <h1 className="title">Show/Hide</h1>
        <div className="name-container">
          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="names">Joe</p>}
          </div>
          <div className="btn-container">
            <button type="button" className="btn" onClick={this.onShowLastName}>
              Show/Hide LastName
            </button>
            {showLastName && <p className="names">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
