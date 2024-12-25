import {useParams} from "react-router-dom"
import {ShopContext} from "../context/ShopContext"
import { useEffect, useState,useContext } from "react";
import { assets } from "../assets/assets";

const Product = () => {
  const {productId} = useParams();
  //console.log(productId);

const {products,currency,
  delivery_fee} = useContext(ShopContext);

  const [productData,setProductData] = useState("");
  const [image,setImage] = useState('');

  const fetchProductData = async() =>{

    if(!products || products.length ===0){
      console.log("products are undefined or empty.");
      return;

    }
    // find the products using productId :

    const product = products.find((item)=>item._id === productId);


      if(product){
        setProductData(product);
        setImage(product.image[0]);
        //log the product object directly
        //console.log("fetched products : ",product);
      }else{
        console.log("No product found with the given ID",productId);
      }
  }

  useEffect(() => {
    fetchProductData();
    //console.log(productData,"1st after 1st eff");
  },[productId,products])

 /*  useEffect(() => {
    console.log("updated productData :",productData);

  },[productData]) */

  return productData ?(
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ------- Product Data ------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* ------- product images -------- */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt=""/>
              ))
            }
            </div>
            <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
            </div>
          </div>

          {/* ---- product info ----- */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className="pl-2">{122}</p>
              </div>

          </div>

      </div>
    </div>
  ):<div className="opacity-0"></div>
}

//3.02

export default Product