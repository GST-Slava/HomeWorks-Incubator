import React from 'react'
import cs from './Message.module.css'


export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={cs.wrapper}>
            <img src={props.avatar} alt={'avatar chat'} className={cs.avatar}/>

            <div className={cs.angle}/>

            <div className={cs.content}>
                <div className={cs.name}>{props.name}</div>
                <div className={cs.text}>{props.message}</div>
                <div className={cs.time}>{props.time}</div>
            </div>
        </div>
    )
}


