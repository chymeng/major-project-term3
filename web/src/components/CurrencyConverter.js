import React, { Component } from "react"
import { fetchCurrency } from "../api/currency"

class CurrencyConverter extends Component {
  state = {
    enteredNumber: 1,
    currency: null
    // error: null
  }

  componentDidMount() {
    fetchCurrency()
      .then(currency => {
        this.setState({ currency: currency })
      })
      .catch(error => {
        this.setState({ error: error })
        console.log("Error loading currency conversion", error)
      })
  }

  render() {
    const { enteredNumber, currency, error } = this.state
    return (
      <div className="App">
        <div className="currencyConverter">
          <h1>Currency Converter</h1>

          <div className="country">
            <div className="flagContainer">
              <div className="countryFlag">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png"
                  className="ausFlag"
                  alt="Australian flag"
                />
              </div>
            </div>
            <div className="currencyAmount">
              <p>$</p>
              <div className="currencyAmountInput">
                <input
                  value={enteredNumber}
                  placeholder="1"
                  aria-label="entered number"
                  onChange={e => {
                    this.setState({ enteredNumber: e.target.value })
                  }}
                />
              </div>
            </div>
          </div>

          <div className="country">
            <div className="flagContainer">
              <div className="countryFlag">
                {!!error && <p>{error.message}</p>}

                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
                  className="jpyFlag"
                  alt="Japanese flag"
                />
              </div>
            </div>
            {!!currency ? (
              <div className="currencyAmount">
                {" "}
                <p>¥</p>
                <div className="currencyAmountInput">
                  <input
                    value={(currency.JPY * enteredNumber).toFixed(2)}
                    placeholder="1"
                    onChange={e => {
                      this.setState({ enteredNumber: e.target.value })
                    }}
                  />
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default CurrencyConverter
