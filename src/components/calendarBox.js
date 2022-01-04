import React, { Component } from "react";

export default class ClaendarBox extends Component {
    constructor(props) {

        super(props);

        const reminder = props.month ? props.month.reminders.filter(reminder => reminder.date === props.date)[0] : undefined;

        this.state = {
            reminderExists: reminder ? true : false,
            textInput: reminder ? reminder.txt : "",

        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        if (!this.state.reminderExists && this.state.textInput !== "") {
            fetch("https://api-calendar-cel.herokuapp.com/reminder/add", {
                method:"POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    text: this.state.textInput,
                    date: this.props.date,
                    month_id: this.props.month.id
                })
            })
            .then(response => response.json())
            .then(data => {
                if (typeof data === "string") {
                    console.log(data)
                }
                else {
                    this.setState({
                        reminderExists: true
                    })
                }
            })
            .catch((error) => console.log("An error occurred: ", error));
       } 
       else if (this.state.reminderExists && this.state.textInput !== "") {
           fetch(`https://api-calendar-cel.herokuapp.com/reminder/update/${this.props.month.id}/${this.props.month.date}`, {
               method: "PUT",
               headers: {"content-type": "application/json"},
               body: JSON.stringify({
                   text:this.state.textInput,
                   date: this.props.date,
                   month_id: this.props.month_id
               }),
            })

            .then(response => response.json())
            .then(data => {
                if (typeof data === "string") {
                    console.log(data)
                }
                else {
                    this.setState({
                        reminderExists: true
                    })
                }
            })
            .catch((error) => console.log("An error occurred: ", error));
        }
    }
    
    render() {

    return (<div className={this.props.overflow ? "boxesWrapper overflow" : "boxesWrapper"} >
        <span>{this.props.date}</span>
        <textarea disabled={this.props.overflow}
        onBlur={this.handleSubmit}
        value={this.state.textInput}
        onChange={(e => this.setState({textInput: e.target.value})).bind(this)}></textarea>
    </div>)
    }
    
    
}