import React from "react"


export default function Navbar(){

    return(
        <React.Fragment>
            <div className=''>
                <ul className='list-inline'>
                    <li className="list-inline-item">Home</li>
                    <li className="list-inline-item">Blog</li>
                </ul>
            </div>
        </React.Fragment>
    );
}
