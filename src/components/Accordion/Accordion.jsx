import React, { useState } from 'react';
import '../../style/components/accordion.css';
import down from '../../assets/down.png';
import up from'../../assets/up.png'


export default function Accordion(props){ 
   const [Open, setIsOpen] = useState(false);
    return(
<section className='accordion'>
    <div className='accordion__container' onClick={() => setIsOpen(!Open)}>
        <h2>{props.title}</h2>   
        <span className='up__down'> 
            {Open ? <button><img src={up} className='up' alt='up'></img></button>  
            :<button><img className='down' src={down}  alt= "down"></img></button>}
        </span>
    </div>
    {Open &&
        <div className='accordion__txt'>
            {props.children}
        </div>
    }
</section>
    )
}
