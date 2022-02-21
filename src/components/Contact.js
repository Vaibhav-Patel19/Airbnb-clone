import React from "react";

// export default function Contact(props) {

//     return (
//         <div className="contact-card">
//             <img src = { props.image } alt = "Cat" />
//             <h3> { props.name } </h3>
//             <div className="info-group">
//                 <p>{ props.phone }</p>
//             </div>
//             <div className="info-group">
//                 <p> { props.mail } </p>
//             </div>
//         </div>
//     )
// }

// Destructuring Props

export default function Contact({image, name, phone, mail,}) {

    return (
        <div className="contact-card">
            <img src = { image } alt = "Cat" />
            <h3> { name } </h3>
            <div className="info-group">
                <p>{ phone }</p>
            </div>
            <div className="info-group">
                <p> { mail } </p>
            </div>
        </div>
    )
}