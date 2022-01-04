import React, { Component } from 'react';



import ContentWrapper from './contentWrapper';
import Footer from './footer';
import Header from './header';


export default class App extends Component {
  constructor() {
    super();

    this.monthList = [
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"]
    this.now = this.calculateDateData()

    this.state = {
      month: {},
      monthdata: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  calculateDateData() {
    const now = new Date();
    const month = this.monthList[now.getMonth()]
    const year = now.getFullYear()
    return {month: month, year: year}

  }

  componentDidMount() {
    fetch('https://api-calendar-cel.herokuapp.com/month/get')
    .then(response => response.json())
    .then(data => this.setState({
      monthData: data,
      month: data.filter(month => month.name === this.now.month && month.year === this.now.year)[0],
    }))
  }

  handleChange(direction) {
    const currentMonthIndex = this.monthList.indexOf(this.state.month.name)
    const newMonthName = this.monthList[direction === "next" ? currentMonthIndex + 1 : currentMonthIndex - 1]
    const newMonthData = this.state.monthData.filter((month) => month.name === newMonthName)[0];
    this.setState({ month: newMonthData })
  }

  render() {
    return (
      <div className='app'>
        <Header 
        monthName={this.state.month.name} 
        handleChange = {this.handleChange}/>
        <ContentWrapper month={this.state.month}/>
        <Footer monthYear ={ this.state.month.year}/>
      </div>
    );
  }
}
