import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";

type GreetingContainerPropsType = {
    users: string[] // need to fix any
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setError(false)
    };
    const addUser = () => {
        const trimName = name.trim()
        if (trimName) {
            addUserCallback(trimName)
            alert(`Hello, ${trimName}!`);
        } else {
            setError(true)
        }
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
