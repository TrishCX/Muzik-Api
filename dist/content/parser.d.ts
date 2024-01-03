import { HomeContent } from "../@types";
export interface IData {
    name?: string;
    description?: string;
    id?: string;
    image?: string;
}
export default function parser(body: HomeContent): {
    ids: string[];
    content: IData[];
};
//# sourceMappingURL=parser.d.ts.map