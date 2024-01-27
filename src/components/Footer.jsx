export default function Footer() {

    return (
        <>
            <div className="bg-purple-900 p-24  ">
                <div className=" m-auto grid grid-cols-2 text-start w-1/2 gap-16">
                    <div className="space-y-2"><p className="text-2xl text-start py-4">Brand</p><p className=" text-start">Looking for a way to shorten long URLs? Check out our short URL and QR code service! We can help you create shorter, more manageable URLs for easy sharing.</p>
                        <div className="flex justify-between  text-2xl">
                            <div><i className=" fa-brands fa-github"></i></div>
                            <div><i className=" fa-brands fa-twitter"></i></div>
                            <div><i className=" fa-brands fa-instagram"></i></div>
                            <div><i className=" fa-brands fa-linkedin"></i></div>

                        </div></div>
                    <div><p className="text-2xl py-4">Products</p>
                        <ul className="space-y-2">
                            <li><a className="text-sm" href="">Qr code</a></li>
                            <li><a className="text-sm" href="">Bio Pages</a></li>
                            <li><a className="text-sm" href="">URL Shortener</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}