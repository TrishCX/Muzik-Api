export interface AccessToken {
    clientId?: string;
    accessToken?: string;
    accessTokenExpirationTimestampMs?: number;
    isAnonymous?: boolean;
}
export declare function getAccessToken(): Promise<AccessToken>;
//# sourceMappingURL=getAccessToken.d.ts.map