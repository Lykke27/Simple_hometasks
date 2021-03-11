import React from 'react'
import style from './Message.module.css'

type MessageType = {
    name: string
    message: string
    time: string,
    avatar: string
}

function Message(props: MessageType) {
    return (

        <div className={style.dialog}>
            <div className={style.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={style.bubble}>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.message}>
                    {props.message}
                </div>
                <div className={style.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
