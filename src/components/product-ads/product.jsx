import './product.css'
import product1 from "../../assets/production-1.png"
import product2 from "../../assets/production2hover.png"
import product3 from "../../assets/carton-boxes1copy.png"
import product4 from "../../assets/Rectangle5copy.png"
import product5 from "../../assets/Rectangle6copy.png"
import product6 from "../../assets/Rectangle7.png"
import product7 from "../../assets/Rectangle10.png"
import product8 from "../../assets/Rectangle8copy.png"
import product9 from "../../assets/Rectangle9copy.png"

function Product() {
  return (
    <secton className="">
        <div className="container">
            <div className="we-produce">
                <p className="product-title">We produce</p>
                <ul className='products'>
                    <li className="product">
                        <img src={product1} alt="product"/>
                    </li>
                    <li className="product">
                        <img src={product2} alt="product"/>
                    </li>
                    <li className="product">
                        <img src={product3} alt="product"/>
                    </li>
                </ul>
            </div>
            
            <div className="we-produce">
                <p className="product-title">Our products</p>
                <ul className='products'>
                    <li className="product">
                        <img src={product4} alt="product"/>
                    </li>
                    <li className="product">
                        <img src={product5} alt="product"/>
                        <img src={product6} alt="product"/>
                    </li>
                    <li className="product">
                        <div className="row-products">
                            <img width="150" src={product7} alt="product"/>
                            <img width="150" src={product8} alt="product"/>
                        </div>
                        <img src={product9} alt="product"/>
                    </li>
                </ul>
            </div>
        </div>
    </secton>
  )
}

export default Product