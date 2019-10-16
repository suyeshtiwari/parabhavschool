import React from 'react'
import './noticeboard.css'

export default function Notice () {
    const noticeList = [{
        label: "Notice 1",
        link: "www.google.com"
    }, {
        label: "Notice 2",
        link: "www.google.com"
    }]
    return (
        <div className="noticeBoard">
            <h2>Notice Board</h2>
            <ul>
                {getNotice(noticeList)}
            </ul>
        </div>
    )
} 

function getNotice (noticeList){
    return noticeList.map(element => {
        return <li><a href={element.link}>{element.label}</a></li>
    });
}