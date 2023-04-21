import Image from "next/image";

//Graphql
import { useQuery } from "urql";
import { GET_STATUS } from "@/Graphql/Query/status.query";
import { GetStatusData } from "@/Graphql/Types/status.types";

const Status = () => {
    //Graphql
    const [{ data, fetching }] = useQuery<GetStatusData>({ query: GET_STATUS });
    if (fetching) return (
        <div className="bg-white w-full rounded-md p-4">
            {[...Array(6)].map((_, i) => (
                <div className={`w-full h-[25px] ${([...Array(8)].length - 1) === i ? "mb-0" : "mb-2"}`} key={i}>
                    <div className="animate-pulse h-full">
                        <div className="w-full bg-gray-300 h-full rounded-md ">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
    return (
        <div className="bg-white w-full rounded-md p-4">
            {data?.personalStatuses.map((item, i) => (
                <div key={i}>
                    <h4 className="text-xl font-semibold mb-1 animate-pulse">{item.title}</h4>
                    <div className="mb-3 animate-pulse" dangerouslySetInnerHTML={{ __html: item.description.html }} />
                    <Image width={800} height={200} src={item.image.url} alt={item.title} className="rounded-md" />
                </div>
            ))}
        </div>
    );
};

export default Status;