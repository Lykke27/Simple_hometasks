import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<UserType[]>([]);

    const addUserCallback = (name: string) => {
        const user = {
            name,
            _id: v1()
        }
        setUsers([...users, user]);
    }

    return (
        <div>
            <hr/>
            homeworks 3

            <GreetingContainer users={users} addUserCallback={addUserCallback} />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
