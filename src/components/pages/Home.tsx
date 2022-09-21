import { useEffect, useState } from "react";
import IUser from "../../models/usesr-models"
import { getUser } from '../../services/user-services'
export default function Home() {
    const [usersArray, setUsers] = useState<IUser[]>([])

    const apiResponse = () => {
        getUser().then((result: IUser[]) => setUsers(result))
    };
    const tableHead = () => {
        if (!usersArray[0]) return;
        return Object.keys(usersArray[0]).map((key) => <th>{key}</th>);
    };
    const tableBody = () => {
        return usersArray?.map((user) => (
            <tr>
              
                {Object.values(user).map((value) =>
                    typeof value === "object" ? (
                        <td>
                            {value.first} {value.last}
                        </td>
                    ) : (
                        <td>{value}</td>
                    )
                )}
            </tr>
        ));
    };


    return (
        <div>
            <h1>
                Home
            </h1>
            <button onClick={apiResponse}>Press to print data API</button>
            <table>
                <thead>{tableHead()}</thead>
                <tbody>{tableBody()}</tbody>
            </table>
        </div>
    )

}


