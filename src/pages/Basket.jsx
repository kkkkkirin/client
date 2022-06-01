import { observer } from "mobx-react-lite";
import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";

const Basket = observer(() => {
    window.setTimeout(() => {
        document.querySelector('.basketWrapper').innerHTML = localStorage.getItem('cards')
    }, 0);

    document.addEventListener('click', function (e) {
        if (e.target.className === 'addBasketBtn btn btn-primary deleteBasket') {
            const card = (e.target).closest('.card')
            card.parentNode.removeChild(card)

            const wrap = document.querySelector('.basketWrapper').innerHTML = '';
            localStorage.setItem('cards', wrap)
        }
    })

    const orderBtn = () => {
        document.addEventListener('click', function (e) {
            if (e.target.className === 'orderBtn btn btn-primary') {
                const card = (e.target).closest('.card')
                card.parentNode.removeChild(card)
                localStorage.removeItem('cards')
            }
        })
    }

    return (
        <Container>
            <h2>Корзина</h2>
            <Card className="p-5" style={{ borderRadius: '15px' }}>
                <Row className="basketWrapper d-flex"></Row>
                <div className='d-flex justify-content-center'>
                    {localStorage.getItem('cards') ?
                        <Button
                        className="orderBtn"
                        onClick={orderBtn}
                        > Заказать
                        </Button> : <h2>Корзина пуста</h2>
                    }
                </div>
            </Card>
        </Container>
    )
})

export default Basket;