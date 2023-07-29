import { CAROUSEL_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Carousel = ({items}) => {
    
    // const {items} = props;
    const cardsData = items?.data?.data?.cards

    const carouselId = ['pneknawbadtvceqzwiep','zpkkdkmvlj5cuvqbc50t','s5ug2key6e2sptaxku5v','ifi2lbzxeu1hvsqrsip3'];
    console.log(cardsData);
    return (
        <div className="bg-gray-900 flex justify-center items-center">
            
            <button onClick={()=>{document.getElementById('box').scrollLeft -= 265 }} className=" text-black bg-white px-2 py-2  rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button> 
            <div className="w-[75%] h-72  relative overflow-hidden">
                <div className="flex  w-full  absolute overflow-x-auto scroll-smooth no-scrollbar" id="box">
                {carouselId.map((card) => (
                
                <Link 
                    key={card} 
                    to="/"
                >
                    <img className="w-72 p-5 m-2 transition-transform duration-500 ease-linear transform-gpu hover:scale-110" 
                    src={CAROUSEL_CDN_URL+card}></img> 
                   
                </Link>
            ))}
                </div>
            </div>
            <button onClick={()=>{document.getElementById('box').scrollLeft += 265 }} className=" text-black bg-white px-2 py-2  rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    )
}
export default Carousel;