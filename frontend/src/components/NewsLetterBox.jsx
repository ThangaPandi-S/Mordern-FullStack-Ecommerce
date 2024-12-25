
const NewsLetterBox = () => {

    const OnSubmitHandler =(event)=>{
        event.preventDefault();
    }
  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Subscribe Now & Get 20% Offer</p>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, neque?</p>

        <form onSubmit={OnSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-black   pl-3">
            <input className="w-full sm:flex-1 outline-none" type="email" name="email" id="email" placeholder="Enter your Email" />
            <button type="submit" className="bg-black text-white text-sm  px-10 py-4">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox