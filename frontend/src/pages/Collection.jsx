import { useContext, useEffect, useState } from "react"
import {ShopContext} from "../context/ShopContext"
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState("relevent");

  //toggle fn ;
  //
  function toggle(e,value,setValue){
    if(value.includes(e.target.value)){
      setValue((prev)=>prev.filter(item=>item!==e.target.value));
    }else{
      setValue((prev)=>[...prev,e.target.value]);
    }
  }


  const toggleCategory = (e)=>toggle(e,category,setCategory)

  const toggleSubCategory = (e)=>toggle(e,subCategory,setSubCategory)

    /* {
    if(subCategory.includes(e.target.value)){
      setSubCategory((prev)=>prev.filter(item=>item!==e.target.value))
    }else{
      setSubCategory((prev)=>[...prev,e.target.value])
     }
  } */


  const applyFilter = ()=>{
    let productsCopy = products.slice();
    // category and subcategory names are equal in the product data


    if(showSearch && search){
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length >0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length >0){
      productsCopy =productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = ()=>{

    let fpCopy = filterProducts.slice();
    switch(sortType){
      case "low-high":
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a,b)=>b.price-a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    applyFilter();
  },[category,subCategory ,search,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType]);

  //debugging
  /* useEffect(() => {
    console.log(subCategory);

  },[subCategory]) */

    return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options : */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center  gap-2">FILTERS
          <img onClick={()=>{setShowFilter(!showFilter)}} className={`h-4 cursor-pointer sm:hidden ${showFilter? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'block':'hidden'} md:block`}>
        <p className="mb-3 text-sm font-medium">CATEGORIES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
          <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
          </p>
          <p className="flex gap-2">
          <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
          </p>
          <p className="flex gap-2">
          <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
          </p>

        </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'block':'hidden'} md:block`}>
        <p className="mb-3 text-sm font-medium">TYPE</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
          <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
          </p>
          <p className="flex gap-2">
          <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
          </p>
          <p className="flex gap-2">
          <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
          </p>
        </div>
        </div>

      </div>



      {/* Right Side  */}
      <section className="flex-1 mr-1">

        <section className="flex justify-between text-base sm:text-2xl  mb-4">
      <Title text1={"ALL"} text2={"COLLECTIONS"}/>

      {/* Product Sort */}

        <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2 ">
        <option value="relevant">Sort by: Relevant</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
        </select>

        </section>
        {/* Map Products */}
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
          {
            filterProducts.map((product,index)=>{
              return (
                <ProductItem key={index} id={product._id} name={product.name} price={product.price} image={product.image}/>
              )
            })
          }
        </section>
      </section>

    </div>
  )
}

export default Collection