// import IUser from "../models/usesr-models";
const APIUSER: string = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
export const getUser = async (): Promise<any> => {
    try {
        return await fetch(APIUSER)
            .then((res: Response) => res.json())
            // .then((details) => details)
    } catch (error) {
        alert(error)
    }
}