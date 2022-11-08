// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  letterCount = event => {
    const {value} = event.target
    this.setState({count: value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <div className="card">
            <label htmlFor="inputBox" className="label">
              Enter the phrase
            </label>
            <input
              className="input-box"
              type="input"
              id="inputBox"
              placeholder="Enter the phrase"
              onChange={this.letterCount}
            />
          </div>
          <p className="count">No.of letters: {count.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
