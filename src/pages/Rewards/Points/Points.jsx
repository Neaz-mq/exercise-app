const historyData = [
    { date: "July 19", activity: "Neck Stretch", points: 10 },
    { date: "July 19", activity: "Neck Stretch", points: 10 },
    { date: "July 19", activity: "Neck Stretch", points: 10 },
    { date: "July 19", activity: "Neck Stretch", points: 10 },
    { date: "July 19", activity: "Neck Stretch", points: 10 },
];

const Points = () => {
    return (
        <div className="flex justify-center items-start p-4">
            <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl w-full mt-24">
                <h2 className="text-3xl text-zinc-600 mb-6">Points History</h2>

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                    <div className="overflow-x-auto rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-[#f4faed]">
                                    <th className="px-4 py-2 text-left text-sm  text-zinc-600 ">
                                        Date
                                    </th>
                                    <th className="px-4 py-2 text-left text-sm  text-zinc-600">
                                        Activity
                                    </th>
                                    <th className="px-4 py-2 text-right text-sm  text-zinc-600 ">
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.map((item, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="px-4 py-3 text-sm text-zinc-500">{item.date}</td>
                                        <td className="px-4 py-3 text-sm text-zinc-500">{item.activity}</td>
                                        <td className="px-4 py-3 text-sm  text-right text-[#7DC33B]">
                                            +{item.points} pts
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Points;
