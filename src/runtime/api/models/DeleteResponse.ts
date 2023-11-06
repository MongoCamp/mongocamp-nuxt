/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.7
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
 * @interface DeleteResponse
 */
export interface DeleteResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DeleteResponse
     */
    wasAcknowledged: boolean;
    /**
     * 
     * @type {number}
     * @memberof DeleteResponse
     */
    deletedCount: number;
}

/**
 * Check if a given object implements the DeleteResponse interface.
 */
export function instanceOfDeleteResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "wasAcknowledged" in value;
    isInstance = isInstance && "deletedCount" in value;

    return isInstance;
}

export function DeleteResponseFromJSON(json: any): DeleteResponse {
    return DeleteResponseFromJSONTyped(json, false);
}

export function DeleteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wasAcknowledged': json['wasAcknowledged'],
        'deletedCount': json['deletedCount'],
    };
}

export function DeleteResponseToJSON(value?: DeleteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'wasAcknowledged': value.wasAcknowledged,
        'deletedCount': value.deletedCount,
    };
}

