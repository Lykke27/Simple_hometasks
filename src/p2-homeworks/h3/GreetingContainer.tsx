import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimName = e.currentTarget.value.trim()
        if (trimName) {
            setName(trimName);
            setError(false)
        } else {
            setError(true)
        }

    };
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}`)
        setName("")
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer
