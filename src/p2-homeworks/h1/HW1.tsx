import React from 'react'
import Message from "./Message";

const messageData1 = {
    avatar: 'https://pulpbits.net/wp-content/uploads/2014/01/cutest-cats-150x150.jpg',
    name: 'Сергей',
    message: 'Согласно расчетам, 2 февраля 2020 SO приблизится к Земле на расстояние 220 тысяч километров,' +
        ' что в два раза меньше, чем расстояние от нашей планеты до Луны. После сближения ракета-носитель ' +
        'покинет орбиту Земли и станет одним из объектов, вращающихся вокруг Солнца',
    time: '20:00',
}

const messageData2 = {
    avatar: 'https://www.studiodaily.com/wp-content/uploads/2017/11/business-cat-150x150.jpg',
    name: 'Персик',
    message: 'Ты че с луны упал?',
    time: '20:02',
}

function HW1() {
    return (
        <div>
            <hr/>
            homework 1

            <Message
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}
                time={messageData1.time}
            />

            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
