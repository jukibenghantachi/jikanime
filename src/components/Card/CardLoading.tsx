export default function CardLoading() {
    return (
        <div className="w-32 animate-pulse">
            <div className="duration-50 h-48 w-32 rounded-md bg-gray-200/90 object-cover transition group-active:scale-95" />
            <div className="mt-2 space-y-2">
                <div className="h-5 w-32 rounded-sm bg-gray-200/90 object-cover group-active:scale-95" />
                <div className="h-3 w-20 rounded-sm bg-gray-200/90 object-cover group-active:scale-95" />
            </div>
        </div>
    );
}
