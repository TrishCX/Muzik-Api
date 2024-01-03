interface SectionResponse {
    name?: string;
    id?: string;
    type?: string;
    image?: string;
    description?: String | string;
    artists?: {
        name: string;
        id: string;
    }[];
}
export interface IResponse {
    title: string;
    content: SectionResponse[];
    nextOffSet: number | null;
}
export declare function fetchSections(id: string, offSet?: number): Promise<IResponse>;
export {};
//# sourceMappingURL=fetchSections.d.ts.map