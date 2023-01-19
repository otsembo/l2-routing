import React from "react";
import { useParams } from "react-router-dom";

export default function About(){

    let params = useParams()

    return(
        <div>
            <center style={{marginTop: 5 +'em', fontSize: 30 + 'px'}}>
                Nurturing Africa’s Tech Talent
                <p>Through market-aligned skills training, we help learners build new career possibilities with greater confidence and capability.</p>
                {params.email}
            </center>
        </div>
    )

}