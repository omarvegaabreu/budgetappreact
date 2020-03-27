import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expenses ? props.state.description : "description",
      note: props.expenses ? props.state.note : "note",
      amount: props.expenses
        ? parseFloat(props.state.amount, 10) * 100
        : "expense",
      createdAt: props.expenses ? props.state.createdAt.valueOf() : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  //updates state of text in form
  onTextChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  //updates state of note in form
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  //updates de amount, set with only one decimal place, reg value
  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  //sets date for single date picker
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  //sets focus for single date picker
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  //submit form
  handleOnSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      //set error message
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    } else {
      this.setState(() => ({
        error: " "
      }));

      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onTextChange}
          ></input>
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          ></input>
          <SingleDatePicker //airbnb react calendar dates
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => {
              false;
            }}
          />
          <textarea
            type="text"
            placeholder="Add note (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
