/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateRequest
 */
export interface UpdateRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UpdateRequest
     */
    document: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UpdateRequest
     */
    filter: { [key: string]: string; };
}

export function UpdateRequestFromJSON(json: any): UpdateRequest {
    return UpdateRequestFromJSONTyped(json, false);
}

export function UpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'document': json['document'],
        'filter': json['filter'],
    };
}

export function UpdateRequestToJSON(value?: UpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'document': value.document,
        'filter': value.filter,
    };
}

