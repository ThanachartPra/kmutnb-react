import React from "react";

export function EventData(){
    const onClickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start')? 'Stop' : 'Start'
        ev.target.innerText = s
    }
    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }
    return (
        <div style = {{textAlign:'center', marginTop:20}}>
            <button onClick = {(ev) => onClickStartStop(ev)}>Start</button><br></br>
            <button onClick = {(ev) => onClickAdd(ev)}>10 + 20</button><br></br>
            <button onClick = {(ev) => onClickAdd(ev)}>30 + 40</button><br></br>
        </div>
    )
}
export function Table(){
    const data = [
        ['JavaScrip', 100],
        ['React', 150],
        ['React Native', 180],
        ['Node.js', 200],
        ['VS Code', 120]
    ]
    const onMouseOverRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'yellow'
    }
    const onMouseOutRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'white'
    }
    return (
        <center>
        <table border="1" cellPadding={5} style={{matgin:'auto', marginTop:30}}> 
            <tr><th>Product</th><th>Price</th></tr>{
                data.map(item=>{
                    return (
                        <tr onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
                            <td>{item[0]}</td><td>{item[1]}</td>
                        </tr>
                    )
                })
            }
        </table>
        </center>
    )
}