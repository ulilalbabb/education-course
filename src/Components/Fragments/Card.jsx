const Card = (props) => {
    const { image, title, description, rating, price, name, position } = props
    return (
        <div className="lg:w-[420px] lg:h-[440px] md:w-[100%] md:h-[235px] bg-white border border-gray-200 px-5 py-5 rounded-2xl">
            <div className="flex gap-3 md:flex lg:flex-col">
                <img src={image} alt="" className="w-1/2 md:w-1/2 lg:w-full hover:scale-105 transition duration-500 cursor-pointer"/>
                <div className="flex flex-col gap-0.5">
                    <h1 className="font-bold md:text-2xl">{title}</h1>
                    <p className="hidden md:block lg:block md:text-lg">{description}</p>
                    <p className="font-semibold md:text-lg">{name}</p>
                    <p className="text-sm md:text-lg">{position}</p>
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-sm md:text-xl">&#9733;{rating}</p>
                        <p className="font-bold text-sm md:text-xl lg:text-2xl text-green-500">{price}</p>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Card