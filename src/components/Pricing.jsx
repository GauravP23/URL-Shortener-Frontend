export default function Pricing() {

    function Card(props) {
        const { stat, price, qr, link, bio, list } = props;

        return (
            <>
                <div className=" w-80 rounded-xl bg-light-blue-900  border-blue-900 border-2 p-4 text-center space-y-6">
                    <p className="font-bold text-xl">{props.stat}</p>
                    <p className="border-blue-gray-600  border-b-2 "> </p>
                    <p><span className="text-3xl font-bold">${props.price}</span> /month</p>

                    <ul>
                        <li>{props.qr} QR Codes/month</li>
                        <li>{props.link} links/month</li>
                        <li>{props.bio} Link-in-bio page</li>
                    </ul>
                    <button className="w-full bg-blue-700">Get Started</button>
                    <div className="text-start space-y-4">
                        <p className="font-semibold" > {price > 0 ? "Everything in Free, plus" : ""} Includes :</p>
                        {
                            list.map((item, index) => {
                                return (
                                    <p className="font-thin" key={index}>{item}</p>
                                )

                            })
                        }
                    </div>
                </div>
            </>



        )

    }










    return (
        <>
            <div>
                <div className="mt-12">
                    <p className="text-5xl tracking-wide     text-center font-bold"> Pricing for brands and businesses of all sizes</p>
                    <p className="text-2xl p-4 text-center font-lg"> Connect to your audience with branded links, QR Codes, and a Link-in-bio that will get their attention.</p>
                    <p className="border-blue-gray-600  border-t-2 mt-8"></p>
                </div>
                <div className="   ">
                    <div className="w-2/4 p-16 flex m-auto gap-4">

                        <Card stat={"Free"} price={0} qr={2} link={5} bio={1} list={[" 5 custom back-halves ", " PNG & JPEG QR Code download formats", " QR Code customization"]} />
                        <Card stat={"Growth"} price={19} qr={5} link={100} bio={1} list={[" 30 days of click & scan data", " UTM Builder", " Advanced QR Code customizations", "Link & QR Code redirects"]} />
                        <Card stat={"Premium"} price={39} qr={10} link={1000} bio={1} list={[" Complimentary custom domain* ", " Additional QR Code download formats ", "4 months of click & scan data", "Bulk link shortening"]} />

                    </div>
                </div>
            </div >
        </>



    )
}