import React from 'react'

const style = {
    backgroundColor: 'white',
    border: '0px solid black',
    borderRadius: '5px',
    width: '250px',
    margin: 'auto',
    marginTop: '20px',
    padding: '5px',
    boxShadow: '2px 2px 5px'
}

const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    margin: '2px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    writable: true
}

const buttonStyleStop = {
    backgroundColor: '#AF4C4C',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    margin: '2px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    writable: true
}

const buttonReset = {
    backgroundColor: '#4C6FAF',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    margin: '2px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px'
}

const counterStyle = {
    fontSize: '28px',

}


class StopWatch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            timerInt: 0,
            timerState: 0,
            timerButton: 'Start Timer',
            timerId: 0,
            resetState: 0
        }
    }

    incrementTimer = () => {
        let currentTimer = Number(this.state.timerInt)
        currentTimer = currentTimer + 0.01
        currentTimer = currentTimer.toFixed(2)
        this.setState({
            timerInt: currentTimer
        })
    }

    timerClickHandler = () => {
        console.log('timer was clicked')

        if(this.state.timerState === 0){
            console.log('timer was started')
            this.setState({
                timerID: setInterval(this.incrementTimer, 10),
                timerState: 1,
                timerButton: 'Stop Timer',
                resetState: 1
            })
            return;
        }

        if (this.state.timerState === 1){
            console.log('timer was stopped')
            clearInterval(this.state.timerID)
            this.setState({
                timerState: 0,
                timerButton: 'Start Timer'
            })
            return;
        }
    }

    resetHandler = () => {
        clearInterval(this.state.timerID)
        this.setState({
            timerInt: 0,
            timerState: 0,
            timerButton: 'Start Timer',
            resetState:0
        })
    }

    render(){
        const mode = this.state.resetState
        if(mode === 0){
            return(
                <div style={style}>
                    <h1>Stop Watch {this.props.number}</h1>
                    <p style={counterStyle}>{this.state.timerInt} s</p>
                    <button style={buttonStyle} onClick={this.timerClickHandler}>{this.state.timerButton}</button>
                </div>
            );
        }
        if(mode === 1){
            if(this.state.timerState === 0){
                return(
                    <div style={style}>
                        <h1>Stop Watch {this.props.number}</h1>
                        <p style={counterStyle}>{this.state.timerInt} s</p>
                        <button style={buttonStyle} onClick={this.timerClickHandler}>{this.state.timerButton}</button>
                        <button style={buttonReset} onClick={this.resetHandler}>Reset</button>
                    </div>
                )
            }
            if(this.state.timerState ===1){
                return(
                    <div style={style}>
                        <h1>Stop Watch {this.props.number}</h1>
                        <p style={counterStyle}>{this.state.timerInt} s</p>
                        <button style={buttonStyleStop} onClick={this.timerClickHandler}>{this.state.timerButton}</button>
                        <button style={buttonReset} onClick={this.resetHandler}>Reset</button>
                    </div>
                )
            }

        }
    }

}

export default StopWatch
