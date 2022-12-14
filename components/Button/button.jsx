import { useState, useRef, useEffect } from "react";
import { BuyButton, Svg, Path } from './styles.jsx'
import { ToastContainer, toast } from 'react-toastify'
import { createGlobalState  } from 'react-hooks-global-state';
import 'react-toastify/dist/ReactToastify.css'

const { useGlobalState } = createGlobalState({inCart:[]});

function Button(product) {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [ productsInCart, setProductsInCart ] = useState([]);
    const [ dataProducts, setdataProducts ] = useGlobalState('inCart');

    const AddToCart = (event) => {
        setIsActive(current => !current);

        if(!isActive) {
            toast.success(`
                ${ref.current.name} foi adicionado ao carrinho!
            `);
            setdataProducts(oldArray => [...oldArray, ref.current.id]);
        }

        if(isActive) {
            toast.success(`
                ${ref.current.name} foi removido do carrinho!
            `);
            setdataProducts(prev => prev.filter(item => item !== ref.current.id ))
        }
    }

    useEffect(() => {
        setProductsInCart([...new Set(dataProducts)])
        console.log(productsInCart)
    },[dataProducts])

    return <>
        <ToastContainer />
        <BuyButton 
            ref={ref}
            className={isActive ? 'checked' : ''} 
            onClick={(e) => {
                e.persist()
                AddToCart()
            }}
            id={product.id}
            name={product.name}
        >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <Path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </Svg>
            Adicionar
        </BuyButton>
    </>
}

export default Button