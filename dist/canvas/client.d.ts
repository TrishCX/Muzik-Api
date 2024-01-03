declare class SPClient {
    private spLocations;
    private spLocationsResolved;
    private token?;
    constructor();
    static create(token: string): Promise<SPClient>;
    init(): Promise<SPClient>;
    getSpLocation(): string;
    setToken(token: string): void;
    getToken(): string;
    fetchProtobufAuthRaw(urlExt: string, method: string, body: any): Promise<ArrayBuffer>;
    postCanvasRequest(track: any): Promise<any>;
}
export { SPClient };
//# sourceMappingURL=client.d.ts.map