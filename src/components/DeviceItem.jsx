import React, { useContext } from "react";
import { Card, Col, Image, Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DEVICE_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import favorite from './../source/heart.png'
import { Context } from "../index";

const DeviceItem = ({ device }) => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const openSpace = document.createElement("div")
    openSpace.classList.add('basketSpace')

    const addBasket = e => {
        if(user.isAuth){
            const card = (e.target).closest('.cardWrapper').cloneNode(true)
            card.querySelector('.addBasketBtn').classList.toggle('deleteBasket')
            card.querySelector('.addBasketBtn').textContent = 'Удалить'
            openSpace.append(card)
    
            const wrap = openSpace.innerHTML
            localStorage.setItem('cards', wrap)
        }
        else{
            navigate(LOGIN_ROUTE)
            const card = (e.target).closest('.cardWrapper').cloneNode(true)
            card.querySelector('.addBasketBtn').classList.toggle('deleteBasket')
            card.querySelector('.addBasketBtn').textContent = 'Удалить'
            openSpace.append(card)
    
            const wrap = openSpace.innerHTML
            localStorage.setItem('cards', wrap)
        }
    }

    const favoriteSpace = document.createElement("div")
    favoriteSpace.classList.add('favoriteSpace')

    const addFavorite = e => {
        if (user.isAuth){
            const card = (e.target).closest('.cardWrapper').cloneNode(true)
            card.querySelector('.addFavoriteBtn').classList.toggle('deleteFavoriteBtn')
            favoriteSpace.append(card)
    
            const wrap = favoriteSpace.innerHTML
            localStorage.setItem('favorites', wrap)
        }
        else{
            navigate(LOGIN_ROUTE)
            const card = (e.target).closest('.cardWrapper').cloneNode(true)
            card.querySelector('.addFavoriteBtn').classList.toggle('deleteFavoriteBtn')
            favoriteSpace.append(card)
    
            const wrap = favoriteSpace.innerHTML
            localStorage.setItem('favorites', wrap)
        }
    }

    return (
        <Col
            md={4}
            style={{ cursor: 'pointer' }}
            className="d-flex justify-content-center cardWrapper"
        >
            <Card style={{ width: '250px', padding: '10px', borderRadius: '50px' }} className="mb-3">
                <Image
                    onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
                    variant="top"
                    className="m-auto"
                    width={170}
                    height={150}
                    src={process.env.REACT_APP_BASE_URL + device.img}
                />
                <div onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
                    <div className="d-flex justify-content-center">
                        {device.name}
                    </div>
                    <div className="d-flex justify-content-center mb-2">{device.price} руб</div>
                </div>
                <div>
                    <div className="d-flex justify-content-center pt-2" style={{ borderTop: '1px solid #DCDCDC' }}>
                        <Button
                            variant="primary"
                            style={{ background: `url(${favorite}) no-repeat center center`, width: '40px', border: 'none' }}
                            onClick={ addFavorite }
                            className="mx-2 addFavoriteBtn"
                        >
                        </Button>
                        <Button
                            variant="primary"
                            style={{ backgroundColor: '#00BFFF', border: '#00BFFF' }}
                            onClick={ addBasket }
                            className="addBasketBtn"
                        >
                            В корзину
                        </Button>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem