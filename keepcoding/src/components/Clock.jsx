import React from "react";
export default class Clock extends React.Component{
   
    state = { date: new Date()}
 
    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
    handleLocal = (locale) => {
        this.setState({
            locale: 'bn-BD'
        })
        
    }
    tick(){
        this.setState({
            date: new Date(),
        })
    }
   
    render(){
        const {date, locale} = this.state;
        const {test} = this.props;
        return(
            
            <div>
                <h1>{test} {date.toLocaleTimeString(locale)}</h1>
                <button type="button" onClick={() => this.handleLocal('en-US')}>Change Locale</button>
            </div>
        )
    }
}