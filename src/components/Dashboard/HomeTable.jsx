import React from 'react'






const HomeTable = () => {

    const fakeData = [
        {
            id: 1,
            shortLink: 'shrtlnk001',
            originalLink: 'https://example.com/page1',
            qrCode: 'qr001',
            clicks: 100,
            status: 'Active',
            date: '2024-01-28'
        },
        {
            id: 2,
            shortLink: 'shrtlnk002',
            originalLink: 'https://example.com/page2',
            qrCode: 'qr002',
            clicks: 150,
            status: 'Inactive',
            date: '2024-01-27'
        },
        {
            id: 3,
            shortLink: 'shrtlnk001',
            originalLink: 'https://example.com/page1',
            qrCode: 'qr001',
            clicks: 100,
            status: 'Active',
            date: '2024-01-28'
        },
        {
            id: 4,
            shortLink: 'shrtlnk002',
            originalLink: 'https://example.com/page2',
            qrCode: 'qr002',
            clicks: 150,
            status: 'Inactive',
            date: '2024-01-27'
        },

    ];

    return (
        <div className="w-full overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-800">
                <thead>
                    <tr className="">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Short Link</th>
                        <th className="px-4 py-2">Original Link</th>
                        <th className="px-4 py-2">QR Code</th>
                        <th className="px-4 py-2">Clicks</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.map(item => (
                        <tr key={item.id} className="text-center">
                            <td className="border px-4 py-2">{item.id}</td>
                            <td className="border px-4 py-2">{item.shortLink}</td>
                            <td className="border px-4 py-2">{item.originalLink}</td>
                            <td className="border px-4 py-2">{item.qrCode}</td>
                            <td className="border px-4 py-2">{item.clicks}</td>
                            <td className="border px-4 py-2">{item.status}</td>
                            <td className="border px-4 py-2">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};






export default HomeTable