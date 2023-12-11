import {useEffect, useState} from "react";

let Product = () => {
    const [productList, setProductList] = useState([]);
    const [cartList,setCartList]=useState([]);
    const addToCart=(product)=>{
        const newCartList = JSON.parse(localStorage.getItem('cartItems')) || [];
        newCartList.push(product)
         localStorage.setItem('cartItems', JSON.stringify(newCartList))

    }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {setProductList(data)
            console.log(data)})
            .catch(error => console.error('Error:', error));
    }, []);


    return (
        <div className="p-4 sm:ml-64 mt-14 p-2 font-sans">
            <div className="flex flex-wrap ">

                {productList.map((product)=>{
                    return<div key={product.id} className=" box-border border-2 rounded w-11/12 xl:w-5/12   mx-auto flex mb-2">
                        <div className="w-1/3 h-full">
                            <img className="object-fill pt-5"
                                 src={product.image}/>
                        </div>
                        <div className="w-2/3 p-2 ">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                    {product.title}
                                </h1>
                                <div className="text-lg font-semibold text-slate-500">
                                    ${product.price}
                                </div>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                    In stock
                                </div>
                            </div>
                            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                <div className="space-x-2 flex text-sm">
                                    <label>
                                        <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            XS
                                        </div>
                                    </label>
                                    <label>
                                        <input className="sr-only peer" name="size" type="radio" value="s"/>
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            S
                                        </div>
                                    </label>
                                    <label>
                                        <input className="sr-only peer" name="size" type="radio" value="s"/>
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            M
                                        </div>
                                    </label>
                                    <label>
                                        <input className="sr-only peer" name="size" type="radio" value="s"/>
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            XL
                                        </div>
                                    </label>

                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex space-x-4 mb-6 text-sm font-medium">
                                    <div className="flex-auto flex space-x-4">
                                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                                                type="submit" onClick={ ()=> addToCart(product)} >
                                            Buy now
                                        </button>
                                        <button key={product.id}
                                            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                            type="button">
                                            Add to bag
                                        </button>
                                    </div>
                                    <button
                                        className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                                        type="button" aria-label="Like">
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                })}

            </div>
        </div>
    )
}
export default Product;