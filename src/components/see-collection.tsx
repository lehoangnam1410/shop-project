export default function SeeCollection() {
    return (
        <div className="bg-[url('/logo-zara.jpg')] w-[75%]  h-[500px] bg-cover bg-center mx-auto flex ">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center items-center">
                <div>
                    <img src="./zara.png" className="w-[80px] h-[40px] mb-[20px]" ></img>
                    <div className="text-[#fff] mb-[20px] ">
                        Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.
                    </div>
                    <div className="bg-[#fff] w-[200px] h-[50px] flex justify-center items-center text-[#000] mt-4">
                        See Colection
                    </div>
                </div>
            </div>
        </div>
    );
}