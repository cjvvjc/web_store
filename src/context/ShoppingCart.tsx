import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen} : ShoppingCartProps) {
    const { closeCart } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
        </Offcanvas>
    ) 
}