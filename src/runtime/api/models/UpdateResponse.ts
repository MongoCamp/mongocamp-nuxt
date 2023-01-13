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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateResponse
 */
export interface UpdateResponse {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateResponse
     */
    wasAcknowledged: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateResponse
     */
    upsertedIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof UpdateResponse
     */
    modifiedCount: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateResponse
     */
    matchedCount: number;
}

export function UpdateResponseFromJSON(json: any): UpdateResponse {
    return UpdateResponseFromJSONTyped(json, false);
}

export function UpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wasAcknowledged': json['wasAcknowledged'],
        'upsertedIds': !exists(json, 'upsertedIds') ? undefined : json['upsertedIds'],
        'modifiedCount': json['modifiedCount'],
        'matchedCount': json['matchedCount'],
    };
}

export function UpdateResponseToJSON(value?: UpdateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'wasAcknowledged': value.wasAcknowledged,
        'upsertedIds': value.upsertedIds,
        'modifiedCount': value.modifiedCount,
        'matchedCount': value.matchedCount,
    };
}

