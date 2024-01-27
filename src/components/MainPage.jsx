import NavbarWithMegaMenu from "./Navbar"
import Footer from "./Footer"

export default function MainPage() {
    {


        return (
            <>
                <NavbarWithMegaMenu />
                <div className="text-center pt-28">
                    <p className=" text-7xl inline-block text-transparent   font-bold mainheading mt-10 p-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... bg-clip-text" >RX short URL & QR code generator</p>
                    <p className="text-2xl pt-10">A short link allows you to collect so much data<br />  about your customers & their behaviors.</p>
                </div>
                <div className="text-center place-items-center  w-1/2 m-auto flex justify-center items-center relative pt-10 ">
                    <input className="  w-full rounded-3xl h-16 pl-4" type="text" placeholder="Enter the link here!" />
                    <button className="absolute right-0 rounded-3xl h-16">Shorten Now!</button>

                </div>
                <div className="text-center p-4">
                    <p>You can create <span className="text-pink-400">05</span> more links. Register  Now to enjoy Unlimited usage</p>
                </div>

                <div className="w-1/2 m-auto mt-16 p-8 border-2 border-purple-900 bg-blue-900 rounded-xl" >
                    <div className="flex justify-between">
                        <div className="text-center p-4">
                            <p className="text-2xl font-bold">1,500,000+</p>
                            <p>Links Created</p>
                        </div>
                        <div className="text-center p-4">
                            <p className="text-2xl font-bold">1704188+</p>
                            <p>Serving Clicks</p>
                        </div>
                        <div className="text-center p-4">
                            <p className="text-2xl font-bold">105+</p>
                            <p>Happy Customers</p>
                        </div>
                        <div className="text-center p-4 ">
                            <p className="text-2xl font-bold">648+</p>
                            <p>Powering Links</p>
                        </div>

                    </div>
                </div>



                <div className="text-center mt-28 ">
                    <p className="text-5xl font-bold"> One short link, infinite possibilities</p>
                    <p className="text-2xl font-lg p-10">A short link is a powerful marketing tool when you use it carefully. It is not just a <br />
                        link but a medium between your customer and their destination.</p>
                </div>
                <div className="p-8 flex justify-center gap-8">

                    <div className="w-80 shadow-xl bg-indigo-500    h-auto border-2 border-white-400 rounded-2xl p-2">
                        <img src="/services-icon1.svg" alt="" />
                        <p className="text-2xl pl-4 pt-4">Smart Targeting</p>
                        <p className="text-md p-4">Target your customers to increase your reach and redirect them to a relevant page. Add a pixel to retarget them in your social media ad campaign to capture them.</p>
                    </div>

                    <div className="w-80 h-auto bg-indigo-500   border-2 border-white-400 rounded-2xl p-2 ">
                        <img className="" src="/services-icon2.svg" alt="" />
                        <p className="text-2xl pl-4 pt-4">In-Depth Analytics</p>
                        <p className="text-md p-4">Share your links to your network and measure data to optimize your marketing campaign's performance. Reach an audience that fits your needs. </p>


                    </div>
                    <div className="w-80 h-auto bg-indigo-500   border-2 border-white-400 rounded-2xl p-2">
                        <img src="/services-icon3.svg" alt="" />
                        <p className="text-2xl pl-4 pt-4">Digital Experience</p>
                        <p className="text-md p-4">Use various powerful tools increase conversion and provide a non-intrusive experience to your customers without disengaging them. </p>
                    </div>

                </div>

                <div className="m-20 space-y-8 flex flex-col gap-20 ">
                    <div className="flex  w-1/2 m-auto gap-8">
                        <div className=" w-1/2 h-auto  "><img src="/feature-standard-img.svg" alt="" /></div>
                        <div className="w-1/2">
                            <p className=" mb-2 text-sm text-pink-800 font-semibold rounded-2xl inline-block p-2 bg-pink-100">Sales & marketing</p>
                            <p className="my-2 text-4xl text-bold ">Perfect for sales & marketing</p>
                            <p className="my-2 text-xl text-white">Understanding your users and customers will help you increase your conversion. Our system allows you to track everything. Whether it is the amount of clicks, the country or the referrer, the data is there for you to analyze it.</p>
                            <p className="my-4 text-xl text-white" >
                                <ul className=" grid gap-2">
                                    <li>  Redirection Tools</li>
                                    <li>      Powerful Statistics</li>
                                    <li>     Beautiful Profiles
                                    </li>
                                </ul>

                            </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 m-auto flex-row-reverse gap-8">
                        <div className=" w-1/2 h-auto  "><img src="/feature-sales-marketing.svg" alt="" /></div>
                        <div className="w-1/2">
                            <p className=" mb-4 text-sm text-pink-800 font-semibold rounded-2xl inline-block p-2 bg-pink-100">Sales & marketing</p>
                            <p className="my-4 text-4xl text-bold ">Powerful tools that work</p>
                            <p className="my-4 text-xl text-white">Our product lets your target your users to better understand their behavior and provide them a better overall experience through smart re-targeting. We provide you many powerful tools to reach them better.</p>
                            <p className="my-4 text-xl text-white" >
                                <ul className=" grid gap-2">
                                    <li>  Redirection Tools</li>
                                    <li>      Powerful Statistics</li>
                                    <li>     Beautiful Profiles
                                    </li>
                                </ul>

                            </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 m-auto gap-8">
                        <div className=" w-1/2 h-auto  "><img src="/feature-sales-marketing-2.svg" alt="" /></div>
                        <div className="w-1/2">
                            <p className=" mb-4 text-sm text-pink-800 font-semibold rounded-2xl inline-block p-2 bg-pink-100">Qr Codes</p>
                            <p className="my-4 text-4xl text-bold ">QR Codes</p>
                            <p className="my-4 text-xl text-white">Easy to use, dynamic and customizable QR codes for your marketing campaigns. Analyze statistics and optimize your marketing strategy and increase engagement.</p>
                            <p className="my-4 text-xl text-white" >

                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>

        )

    }
}