import React, { useState } from "react";
import { Modal } from 'react-bootstrap'

export default function Pizza({ pizzaSelected }) {

    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '40px' }} className="shadow-lg p-3 mb-5 bg-white rounded">

            <div onClick={handleShow}>
                <h1>{pizzaSelected.name}</h1>
                <img src={pizzaSelected.image} className="img-fluid" style={{ height: '200px', width: "200px" }} />
            </div>

            <div className="flex-container">

                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => setVarient(e.target.value)}>
                        {pizzaSelected.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((x, i) => {
                            return (<option value={i + 1}>{i + 1}</option>)
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">

                <div className="m-1 w-100">
                    <h1>Price R$ {pizzaSelected.prices[0][varient] * quantity}</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn">Add to cart </button>
                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizzaSelected.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizzaSelected.image} className="img-fluid" style={{ height: '300px', width: "300px" }}/>
                    <p>{pizzaSelected.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}