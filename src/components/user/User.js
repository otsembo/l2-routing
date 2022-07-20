import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

    let { username } = useParams()

    return(
        <div>
            <center style={{marginTop: 5 +'em', fontSize: 30 + 'px'}}>
                User: {username}
            </center>
        </div>
    )

}

function Doubler(){

    let { num } = useParams()
    const double = num * 2

    return(
        <div>
            Double of {num} is {double}
        </div>
    )
}

export {Doubler}