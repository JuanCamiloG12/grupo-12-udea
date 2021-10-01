import React from "react";
import ReactDOM from "react-dom";


function fomarNombre(user){
    return user.primernombre +" "+ user.segundonombre;

}
const user={
    primernombre : "juan",
    segundonombre :"camilo"

}
const element =(
    <h>
        nombreCompleto {(fomarNombre(user))}
    </h>
);

ReactDOM.render(
    element,
    document.getElementById('root')
)


    


