"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
// export default function parser(body: HomeContent): IData[] {
//   const { browse } = body.data;
//   const { items } = browse.sections;
//   const array: IData[] = [];
//   for (const item of items) {
//     for (const content of item.sectionItems.items) {
//       const { data } = content.content;
//       const name = data.name;
//       const description = data.description?.toString();
//       const image = data?.images?.items.at(-1)?.sources.at(-1)?.url;
//       array.push({
//         name,
//         description,
//         id: parse(content.uri)?.id,
//         image,
//       });
//     }
//   }
//   return array.filter((i) => i.image !== undefined);
// }
function parser(body) {
    var _a;
    const { browse } = body.data;
    const { items } = browse.sections;
    const array = [];
    const ids = [];
    for (const item of items) {
        const formattedId = (_a = (0, helpers_1.parseSectionId)(item.uri)) === null || _a === void 0 ? void 0 : _a.toString();
        ids.push(formattedId);
        // for (const content of item.sectionItems.items) {
        //   const { data } = content.content;
        //   const name = data?.name;
        //   const description = data.description?.toString();
        //   const image = data?.images?.items.at(-1)?.sources.at(-1)?.url;
        //   array.push({
        //     name,
        //     description,
        //     id: formatURI(data?.uri),
        //     image,
        //   });
        // }
    }
    return {
        ids,
        content: array.filter((data) => data.name && data.id && data.image),
    };
}
exports.default = parser;
// https://api-partner.spotify.com/pathfinder/v1/query?operationName=browseSection&variables=%7B%22pagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A20%7D%2C%22uri%22%3A%22spotify%3Asection%3A0JQ5IMCbQBLAlPhkJ41ypw%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2249ee421d41b319f3f3ae7b652a4438230d192efe31c92fc29707b96e584bcaac%22%7D%7D
// section0JQ5IMCbQBLAlPhkJ41ypw
