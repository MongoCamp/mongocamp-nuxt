/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorDescription,
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    Version,
    VersionFromJSON,
    VersionToJSON,
} from '../models';

/**
 * 
 */
export class InformationApi extends runtime.BaseAPI {

    /**
     * Version Info of the MongoCamp API
     * Version Information
     */
    async versionRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Version>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionFromJSON(jsonValue));
    }

    /**
     * Version Info of the MongoCamp API
     * Version Information
     */
    async version(initOverrides?: RequestInit): Promise<Version> {
        const response = await this.versionRaw(initOverrides);
        return await response.value();
    }

}
