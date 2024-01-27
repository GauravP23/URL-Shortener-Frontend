import { useState } from "react";
import ServiceList from "./Services";
import FeatureList from "./Feature";
// import { UrlShortener } from "../Shortener";
 
export async function UrlData(url) {
    console.log(url);
    return url;
}
  
export default function MainPage() {
    let [input, setInput] = useState({
        url: "",

    });
    let handleInputChange = (event) => {

        setInput((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }

        }

        )



    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        console.log(UrlData(input.url));

        setInput({
            url: "",
        });


    }

    const StatisticBox = ({ value, label }) => (
        <div className="text-center p-4">
            <p className="text-2xl font-bold">{value}</p>
            <p>{label}</p>
        </div>
    );

    const StatisticsSection = () => {
        const statistics = [
            { value: "1,500,000+", label: "Links Created" },
            { value: "1,704,188+", label: "Serving Clicks" },
            { value: "105+", label: "Happy Customers" },
            { value: "648+", label: "Powering Links" }
        ];

        return (
            <>
                {statistics.map((stat, index) => (
                    <StatisticBox
                        key={index}
                        value={stat.value}
                        label={stat.label}
                    />
                ))}
            </>
        );
    };

// console.log({UrlShortener});
    return (
        <>

            <div className="text-center pt-28">
                <p className=" text-7xl inline-block text-transparent   font-bold mainheading mt-10 p-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... bg-clip-text" >RX short URL & QR code generator</p>
                <p className="text-2xl pt-10">A short link allows you to collect so much data<br />  about your customers & their behaviors.</p>
            </div>
            <div className="text-center place-items-center  w-4/12 m-auto flex justify-center items-center relative pt-10 ">
                <input id="url" name="url" value={input.url} onChange={handleInputChange} className="  w-full rounded-3xl h-16 pl-4" type="text" placeholder="Enter the link here!" />
                <button onClick={handleSubmit} className="absolute right-0 rounded-3xl h-16">Shorten Now!</button>

                {/* <p>{UrlShortener}</p> */}
            </div>
            <div className="text-center p-4">
                <p>You can create <span className="text-pink-400">05</span> more links. Register  Now to enjoy Unlimited usage</p>
            </div>

            <div className="w-1/2 m-auto mt-16 p-8 border-2 border-purple-900 bg-blue-900 rounded-xl" >
                <div className="flex justify-between">
                    <StatisticsSection />

                </div>
            </div>



            <div className="text-center mt-28 ">
                <p className="text-5xl font-bold"> One short link, infinite possibilities</p>
                <p className="text-2xl font-lg p-10">A short link is a powerful marketing tool when you use it carefully. It is not just a <br />
                    link but a medium between your customer and their destination.</p>
            </div>

            <div className="p-8 flex justify-center gap-8">
                <ServiceList />

            </div>

            <div className="m-20 space-y-8 flex flex-col gap-20 ">
                <FeatureList />

            </div>

        </>

    )

}
 