import React, {Component} from "react";

export default class Calendar extends Component{
    getDate() {
        const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const monthNames = ['January','February','March',
                            'April','May','June',
                            'July','August','September',
                            'October','November','December']
        const date = new Date()
        const weekDay = dayName[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()+543
        return `${weekDay} ${day} ${month} ${year}`
    }
    render() {
        return <div>{this.getDate()}</div>
    }
}