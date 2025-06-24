export default function Follow() {
    return (
        <>
            <div className="bg-[#1E28320D]">
                <div className="w-[75%] mx-auto mt-[50px] mb-[50px]">
                    <h1 className="flex justify-center items-center">Follow products and discounts on Instagram</h1>
                    <div className="flex justify-between items-center mt-[30px] gap-[20px]">
                        <img src="./img-product12.jpg" className="w-[150px] h-[150px]"></img>
                        <img src="./img-product12.jpg" className="w-[150px] h-[150px]"></img>
                        <img src="./img-product12.jpg" className="w-[150px] h-[150px]"></img>
                        <img src="./img-product12.jpg" className="w-[150px] h-[150px]"></img>
                        <img src="./img-product12.jpg" className="w-[150px] h-[150px]"></img>
                        <img src="./img-product12.jpg" className="w-[150px] h-[150px]"></img>
                    </div>
                </div>
                <div className="w-[75%] mx-auto text-center  ">
                    <h1 className="flex justify-center items-center">Or subscribe to the newsletter</h1>
                    <form className="flex items-center gap-4 justify-center mt-[30px] pb-[50px]">
                        <div className="border-b-2 border-[#232323] bg-transparent flex items-center w-full max-w-[400px]">
                            <input
                                type="text"
                                placeholder="Email Address..."
                                className="flex-1 border-none border-b-2 border-[#232323] bg-transparent outline-none focus:outline-none pl-4 py-2 placeholder-gray-400"
                            />
                        </div>
                        <div className="bg-transparent border-b-2 border-[#232323] flex items-center ml-[20px]">
                            <button
                                type="submit"
                                className="border-none"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}