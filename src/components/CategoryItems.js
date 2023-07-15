import { CDN_URL } from "../utils/constants";
const CategoryItems = ({items}) => {
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="flex justify-between pt-4 pb-5 border-b-[1px] border-gray-200 gap-x-5 ">
                        <div className="w-9/12">
                            <p className="font-medium text-lg">{item.card.info.name}</p>
                            <p className="font-medium text-sm ">₹ {item.card.info.price/100}</p>
                            <p className="pt-3 text-sm text-gray-400">{item.card.info.description}</p>
                        </div>
                        <div className="p-5 w-3/12"> 
                                <button className="absolute text-sm mt-[68px] mx-5 px-8 pt-1 pb-2 font-semibold border border-solid border-gray-400 text-green-500 bg-white rounded flex">
                                    ADD 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            
                            <img src={CDN_URL + item.card.info.imageId} className="object-cover rounded"></img>  
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryItems;