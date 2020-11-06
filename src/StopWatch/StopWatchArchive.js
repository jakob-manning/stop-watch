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
    fontSize: '24px'
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

function StopWatchArchive (props){
    const mode = props.mode
    if(mode === 0){
        return(
            <div style={style}>
                <h1>Stop Watch</h1>
                <p style={counterStyle}>{props.time} s</p>
                <button style={buttonStyle} onClick={props.click}>{props.timerButton}</button>
            </div>
        );
    }
    if(mode === 1){
        return(
            <div style={style}>
                <h1>Stop Watch</h1>
                <p style={counterStyle}>{props.time} s</p>
                <button style={buttonStyle} onClick={props.click}>{props.timerButton}</button>
                <button style={buttonReset} onClick={props.resetClick}>Reset</button>
            </div>
        )
    }

}

export default StopWatchArchive
