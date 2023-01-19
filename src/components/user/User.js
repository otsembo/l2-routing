import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

    let params = useParams()

    return(
        <div>
            <center style={{marginTop: 5 +'em', fontSize: 30 + 'px'}}>
                User: {params.name}
            </center>
        </div>
    )

}