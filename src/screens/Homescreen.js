import React from 'react';
import pizzas from '../pizzasdata';
import Pizza from '../components/Pizza';

export default function Homescreen(){
    return(
        <div>
           <div className="row">

            {pizzas.map(pizzaItem=> {

                return <div className="col-md-4">
                        <div className> 
                            <Pizza pizzaSelected={pizzaItem}/>
                        </div>
                    </div>
            })}

           </div>
        </div >
    )
}