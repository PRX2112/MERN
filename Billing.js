import React, { useReducer } from 'react'

const initialization = {
    burgerQty: 0,
    burgerPrice: 0,

    pizzaQty: 0,
    pizzaPrice: 0,

    totalQty: 0
}
function Billing() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add_burger':
                return { ...state, burgerQty: state.burgerQty + 1, burgerPrice: state.burgerPrice + 100, totalQty: state.totalQty + 100 }
            case 'sub_burger':
                return { ...state, burgerQty: state.burgerQty - 1, burgerPrice: state.burgerPrice - 100, totalQty: state.totalQty - 100 }

            case 'add_pizza':
                return { ...state, pizzaQty: state.pizzaQty + 1, pizzaPrice: state.pizzaPrice + 150, totalQty: state.totalQty + 150 }
            case 'sub_pizza':
                return { ...state, pizzaQty: state.pizzaQty - 1, pizzaPrice: state.pizzaPrice - 150, totalQty: state.totalQty - 150 }
            default:
                return state
            }
    }
    const [state,dispatch]=useReducer(reducer,initialization);
    return (
        <>
            <div>
                <table border='2' width='100%' align='center'>
                    <thead>
                        <tr>
                            <th colSpan='3'><h2>Order List</h2></th>
                        </tr>
                        <tr>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Burger</td>
                        <td>
                            &nbsp;&nbsp;<button className='btn btn-success' onClick={(e)=>{dispatch({type : 'add_burger'})}}>+</button>&nbsp;&nbsp;
                            {state.burgerQty}&nbsp;&nbsp;{state.burgerQty!==0 ? <button className='btn btn-danger' onClick={()=>{dispatch({type:'sub_burger'})}}> - </button>
                            :<button className='btn btn-danger' disabled onClick={()=>{dispatch({type:'sub_burger'})}}>-</button>}
                        </td>
                            <td>{state.burgerPrice}</td>
                            </tr>

                        <tr>
                            <>
                        <td>Pizza</td>
                        <td>
                            &nbsp;&nbsp;<button className='btn btn-success' onClick={(e)=>{dispatch({type : 'add_pizza'})}}>+</button>&nbsp;&nbsp;
                            {state.pizzaQty}&nbsp;&nbsp;{state.pizzaQty!==0 ? <button className='btn btn-danger' onClick={()=>{dispatch({type:'sub_pizza'})}}> - </button>
                            : <button className='btn btn-danger' disabled onClick={()=>{dispatch({type:'sub_pizza'})}}>-</button>}
                        </td>
                            <td>{state.pizzaPrice}</td>
                            </>
                        </tr>

                        <tr>
                            <td colSpan='3' align='center'><i>Total Amount : {state.totalQty}</i></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Billing