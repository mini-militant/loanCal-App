import React from "react";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import '../css/style.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 500,
      loanDuration: 6,
    };
  }


  handleLoanAmountChange = event => {
    this.setState({ loanAmount: event.target.value });
  };
  handleLoanDurationChange = event => {
    this.setState({ loanDuration: event.target.value });
  };

  render() {
    return (
      <div>

          <div className="sidebar">
            <MenuList>
              {Object.values(
                JSON.parse(localStorage.getItem("localStore")) || []
              ).map(item => (
                <MenuItem
                  onClick={() =>
                    this.setState({
                      loanAmount: item.loanAmount,
                      loanDuration: item.loanDuration
                    })
                  }
                >
                  LoanAmount : {item.loanAmount} <br />
                  LoanDuration : {item.loanDuration}
                </MenuItem>
              ))}
            </MenuList>
            </div>

            <form onSubmit={this.props.displayMonthlyPay}>
              <label className="label">
                Loan Amount :
                <input
                  type="number"
                  min='500'
                  max='5000'
                  name="loanAmount"
                  value={this.state.loanAmount}
                  onChange={this.handleLoanAmountChange}
                />
                <div>{this.state.loanAmountError}</div>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    value={this.state.loanAmount}
                    className="slider"

                    id="myRange"
                    onChange={this.handleLoanAmountChange}
                  />
                </div>
              </label>
              <br />
              <label className="label">
                Loan Duration :
                <input
                  type="number"
                  min="6"
                  max="24"
                  name="loanDuration"
                  value={this.state.loanDuration}
                  onChange={this.handleLoanDurationChange}
                />
              </label>
              <br />
              <button>Check</button>
            </form>
            </div>


    );
  }
}
export default Form;
