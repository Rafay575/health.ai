import React from "react";
// import image from "../../assets/images/home.png";

function Homecomponent({ title, text, image, left }) {
    return (
        <>
            {left ? (
                <div className=" py-20">
                    <div className="container ">
                        <div className="row flex flex-col lg:flex-row-reverse gap-8 overflow-hidden">
                            <div className="relative w-full lg:w-1/2 overflow-hidden">
                                <div className="w-full h-full transition-transform duration-500 transform hover:scale-125">
                                    <img
                                        src={image}
                                        alt="Your Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-wrapper lg:w-1/2 flex flex-col gap-8 ">
                                <div className="flex items-center">
                                    <span
                                        className={`inline-block w-[60px] h-1 bg-[#c10891]`}
                                    ></span>

                                    <h2
                                        className={`ml-2 text-xl font-semibold text-[#c10891]`}
                                    >
                                        Better your health
                                    </h2>
                                </div>
                                <div
                                    className={`title text-4xl font-[900] text-[#c10891]`}
                                >
                                    {title}
                                </div>
                                <div
                                    className={`text font-[600] text-justify text-[black]`}
                                >
                                    {text}
                                </div>
                                <div>
                                    <button
                                        className={`px-20 py-4  bg-[#c10891] text-[white]`}
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`bg-[#c10891] py-20`}>
                    <div className="container ">
                        <div className="row flex flex-col lg:flex-row  gap-8 overflow-hidden ">
                            <div className="relative w-full lg:w-1/2 overflow-hidden">
                                <div className="w-full h-full transition-transform duration-500 transform hover:scale-125">
                                    <img
                                        src={image}
                                        alt="Your Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-wrapper lg:w-1/2 flex flex-col gap-8 lg:ml-12">
                                <div className="flex items-center">
                                    <span
                                        className={`inline-block w-[60px] h-1 bg-[white]`}
                                    ></span>

                                    <h2
                                        className={`ml-2 text-xl font-semibold text-[white]`}
                                    >
                                        Better your health
                                    </h2>
                                </div>
                                <div
                                    className={`title text-4xl font-[900] text-[white]`}
                                >
                                    {title}
                                </div>
                                <div
                                    className={`text font-[600] text-justify text-[white]`}
                                >
                                    {text}
                                </div>
                                <div>
                                    <button
                                        className={`px-20 py-4  bg-[white] text-[#c10891]`}
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Homecomponent;
