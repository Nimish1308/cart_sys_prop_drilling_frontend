import React, { useState } from 'react'
import { Link } from 'react-router'

const CartPage = ({ cart = [], increaseQty, decreaseQty, removeFromCart }) => {
    const [deliveryCharge, setDeliveryCharge] = useState(5); // Default to standard delivery

    const totalItemsPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = totalItemsPrice + deliveryCharge;

    const handleDeliveryChange = (e) => {
        const value = parseFloat(e.target.value);
        setDeliveryCharge(value);
    };
    return (
        <>
            <section class="h-100 h-custom" style={{ backgroundColor: " #d2c9ff" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12">
                            <div class="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div class="card-body p-0">
                                    <div class="row g-0">
                                        <div class="col-lg-8">
                                            <div class="p-5" >
                                                <div class="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 class="fw-bold mb-0">Shopping Cart</h1>
                                                    <h6 class="mb-0 text-muted">{cart.length} items</h6>
                                                </div>
                                                <div className="scroll" style={{ overflow: 'scroll', height: '400px', overflowX: 'hidden', padding: '5px' }}>
                                                    <hr class="my-4" />

                                                    {
                                                        cart.length === 0 ? (
                                                            <p style={{ textAlign: 'center' }}>Cart is empty</p>
                                                        ) : (
                                                            cart.map((item, i) => (
                                                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                                                        <img
                                                                            src={item.image}
                                                                            class="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                    </div>
                                                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                                                        <h6 class="text-muted">{item.title}</h6>
                                                                        <h6 class="mb-0">{item.category}</h6>
                                                                    </div>
                                                                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                                                            onClick={() => decreaseQty(item.id)}>
                                                                            <i class="fas fa-minus"></i>
                                                                        </button>

                                                                        <input id="form1" min="0" name="quantity" type="number"
                                                                            class="form-control form-control-sm" value={item.quantity} />

                                                                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                                                            onClick={() => increaseQty(item.id)}>
                                                                            <i class="fas fa-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 class="mb-0">${item.price}</h6>
                                                                    </div>
                                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a class="text-muted" onClick={() => removeFromCart(item.id)}><i class="fas fa-times"></i></a>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        )
                                                    }






                                                    <hr class="my-4" />
                                                </div>

                                                <Link to={`/`}>
                                                    <div class="pt-5">
                                                        <h6 class="mb-0"><a href="#!" class="text-body"><i
                                                            class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 bg-body-tertiary">
                                            <div class="p-5">
                                                <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr class="my-4" />

                                                <div class="d-flex justify-content-between mb-4">
                                                    <h5 class="text-uppercase"> total items </h5>
                                                    <h5>{cart.length}</h5>
                                                </div>

                                                <h5 class="text-uppercase mb-3">Shipping</h5>

                                                <div class="mb-4 pb-2">
                                                    <select data-mdb-select-init value={deliveryCharge} onChange={handleDeliveryChange}>
                                                        <option value="5">Standard-Delivery- $5.00</option>
                                                        <option value="10">Fast-Delivery- $10.00</option>

                                                    </select>
                                                </div>

                                                <h5 class="text-uppercase mb-3">Give code</h5>

                                                <div class="mb-5">
                                                    <div data-mdb-input-init class="form-outline">
                                                        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Examplea2">Enter your code</label>
                                                    </div>
                                                </div>

                                                <hr class="my-4" />

                                                <div class="d-flex justify-content-between mb-2">
                                                    <span>Subtotal:</span>
                                                    <span>${totalItemsPrice.toFixed(2)}</span>
                                                </div>
                                                <div class="d-flex justify-content-between mb-2">
                                                    <span>Delivery Charge:</span>
                                                    <span>${deliveryCharge.toFixed(2)}</span>
                                                </div>
                                                <hr class="my-2" />

                                                <div class="d-flex justify-content-between mb-5">
                                                    <h5 class="text-uppercase">Total price</h5>
                                                    <h5>$ {total.toFixed(2)}</h5>
                                                </div>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark">Proceed To Pay</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartPage
