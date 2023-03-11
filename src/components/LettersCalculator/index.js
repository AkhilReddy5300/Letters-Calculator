import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  changeValue = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="header">
            Calculate the <br />
            Letters you <br />
            enter
          </h1>
          <label htmlFor="label1" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            id="label1"
            className="inputEl"
            placeholder="Enter the phrase"
            onChange={this.changeValue}
            value={searchInput}
          />
          <div className="lettersCont">
            <p>No.of letters: {searchInput.length}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
