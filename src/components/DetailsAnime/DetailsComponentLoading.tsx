export default function DetailsComponentLoading() {
    return (
        <div className="animate-pulse">
            <div className="flex justify-center">
                <div className="h-56 w-44 rounded-md bg-gray-200/90" />
            </div>
            <div className="mt-3 mb-1 flex items-center justify-center">
                <div className="h-5 w-96 rounded-md bg-gray-200/90" />
            </div>
            <div className="flex items-center justify-center">
                <div className="h-3 w-80 rounded-md bg-gray-200/90" />
            </div>
            <table className="my-5">
                <tbody>
                    <tr>
                        <th />
                        <th />
                    </tr>
                    <tr>
                        {Array(11)
                            .fill(0)
                            .map((_, id) => (
                                <tr key={id}>
                                    <td className="pr-5 pb-2">
                                        <div className="h-3 w-28 rounded-sm bg-gray-200/90" />
                                    </td>
                                    <td className="pb-2">
                                        <div className="h-3 w-60 rounded-sm bg-gray-200/90" />
                                    </td>
                                </tr>
                            ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
