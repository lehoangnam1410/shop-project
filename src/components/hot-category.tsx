export default function HotCategory() {
    
    return (
        <>
            <div className ="flex ">
                {/* <div className="vertical-rl text-[34px]">
                    Explore new and popular styles
                </div> */}
                <div className="w-[75%] mx-auto my-16">
                    <div className="flex gap-4">
                        <div className="w-1/2 mr-[20px]">
                            <img src="/img-product4.jpg" alt="Model in vest" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-1/2 flex flex-col gap-4">
                            <div className="flex-1 flex gap-[20px] mb-[20px]">
                                <div className="w-1/2">
                                    <img src="/img-product2.jpg" alt="Man in black jacket" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-1/2">
                                    <img src="/img-product3.jpg" alt="Woman in red dress" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex-1 flex gap-[20px]">
                                <div className="w-1/2">
                                    <img src="/img-product1.jpg" alt="Woman walking" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-1/2">
                                    <img src="/img-product5.jpg" alt="Man in cardigan" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
