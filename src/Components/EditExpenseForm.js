import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default class EditExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: 0,
    createdAt: moment(),
    calendarFocused: false
  };

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

    if (/^\d*(\.\d{0,2})?$/) {
      this.setState(() => ({ amount }));
    }
  };
  //sets date for single date picker
  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };
  //sets focus for single date picker
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onTextChange}
          ></input>
          <input
            type="number"
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
