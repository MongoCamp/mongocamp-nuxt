/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.4.0
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
 * @interface InsertResponse
 */
export interface InsertResponse {
    /**
     * 
     * @type {boolean}
     * @memberof InsertResponse
     */
    wasAcknowledged: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof InsertResponse
     */
    insertedIds?: Array<string>;
}

export function InsertResponseFromJSON(json: any): InsertResponse {
    return InsertResponseFromJSONTyped(json, false);
}

export function InsertResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsertResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wasAcknowledged': json['wasAcknowledged'],
        'insertedIds': !exists(json, 'insertedIds') ? undefined : json['insertedIds'],
    };
}

export function InsertResponseToJSON(value?: InsertResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'wasAcknowledged': value.wasAcknowledged,
        'insertedIds': value.insertedIds,
    };
}

