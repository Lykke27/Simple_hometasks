import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers,}
) => {
    const inputClass = error ? s.error : " ";

    return (
        <div className={s.greetingForm}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass} placeholder={"Enter user first name"}/>
                <span> {error} </span>
                <button onClick={addUser}> Add</button>
            </div>
            <span> Количество пользователей: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
