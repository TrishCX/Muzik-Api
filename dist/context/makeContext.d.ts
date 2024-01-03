declare namespace Context {
    interface IContext {
        clientName: string | "WEB_REMIX";
        clientVersion: string | "0.1";
        videoId?: string;
        extraData?: any;
    }
    interface Response {
        context: {
            capabilities?: {};
            client: {
                clientName: string;
                clientVersion: string;
            };
        };
    }
}
export declare function makeContext(context: Context.IContext): Context.Response;
export {};
//# sourceMappingURL=makeContext.d.ts.map