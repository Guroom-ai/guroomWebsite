import React from 'react'
import { Button } from '../components/ButtonElements';

const getUser = () => {
    axios({
        method: 'GET', 
        withCredentials: true,
        url: "http://localhost:4000/getUser",
    }).then((res) => console.log(res));
};

const FrontPage = () => {
    return (
        <>
            <h1>Get User</h1>
            <Button type="submit" onClick={getUser}>Submit</Button>
        </>
    )
}

export default FrontPage
