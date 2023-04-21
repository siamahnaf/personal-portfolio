export interface StatusData {
    image: {
        url: string;
    };
    title: string;
    rive: string;
    description: {
        html: string;
    };
}
export interface GetStatusData {
    personalStatuses: StatusData[]
}