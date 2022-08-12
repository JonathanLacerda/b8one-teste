import { useState, useRef, useEffect } from "react"
import { WhishlistButton, HeartMain, HeartBackground } from './styles.jsx'
import { ToastContainer, toast } from 'react-toastify'
import { createGlobalState  } from 'react-hooks-global-state';
import 'react-toastify/dist/ReactToastify.css'

const { useGlobalState } = createGlobalState({inWishlist:[]});

function Wishlist(item) {
    const ref = useRef(null);
    const [ isActive, setIsActive ] = useState(false);
    const [ productsInWishlist, setProductsInWishlist ] = useState([]);
    const [ dataWishlist, setDataWishlist ] = useGlobalState('inWishlist');
    
    const AddToWishlist = () => {
        setIsActive(current => !current);

        if(!isActive) {
            toast.success(`
                ${ref.current.name} foi adicionado a wishlist!
            `);
            setDataWishlist(oldArray => [...oldArray, ref.current.id]);
        }

        if(isActive) {
            toast.success(`
                ${ref.current.name} foi removido da wishlist!
            `);
            setDataWishlist(prev => prev.filter(item => item !== ref.current.id ))
        }
    }

    useEffect(() => {
        setProductsInWishlist([...new Set(dataWishlist)])
        console.log(productsInWishlist)
    },[dataWishlist])

    return <>
        <WhishlistButton 
            ref={ref}
            className={isActive ? 'checked' : ''} 
            onClick={(e) => {
                e.persist()
                AddToWishlist()
            }}
            id={item.id}
            name={item.name}
        >
            <HeartMain className={isActive ? 'checked heart-main' : 'heart-main'} viewBox="0 0 512 512" width="100" title="heart">
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </HeartMain>
            <HeartBackground className="heart-background">
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </HeartBackground>
        </WhishlistButton>
    </>
}

export default Wishlist