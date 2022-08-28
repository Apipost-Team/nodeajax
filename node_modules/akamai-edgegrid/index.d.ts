import { AxiosError, AxiosResponse } from "axios";

declare class EdgeGrid {
    constructor(clientTokenOrOptions: string | object,
        clientSecret?: string,
        accessToken?: string,
        host?: string,
        debug?: boolean);

    request: object;
    config: object;

    /**
    * Sends the request and invokes the callback function.
    *
    * @param  {Function} callback The callback function.
    * @return EdgeGrid object (self)
    */
    send(callback: (error: AxiosError, response?: AxiosResponse, body?: string) => void): EdgeGrid;

    /**
    * Builds the request using the properties of the local config Object.
     *
    * @param  {Object} req The request Object. Can optionally contain a
    *                      'headersToSign' property: An ordered list header names
    *                      that will be included in the signature. This will be
    *                      provided by specific APIs.
    * @return EdgeGrid object (self)
    */
    auth(req: object): EdgeGrid;
}

export = EdgeGrid;