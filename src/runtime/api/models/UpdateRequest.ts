/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
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

/**
 * Check if a given object implements the UpdateRequest interface.
 */
export function instanceOfUpdateRequest(value: object): value is UpdateRequest {
    if (!('document' in value) || value['document'] === undefined) return false;
    if (!('filter' in value) || value['filter'] === undefined) return false;
    return true;
}

export function UpdateRequestFromJSON(json: any): UpdateRequest {
    return UpdateRequestFromJSONTyped(json, false);
}

export function UpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'document': json['document'],
        'filter': json['filter'],
    };
}

export function UpdateRequestToJSON(json: any): UpdateRequest {
    return UpdateRequestToJSONTyped(json, false);
}

export function UpdateRequestToJSONTyped(value?: UpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'document': value['document'],
        'filter': value['filter'],
    };
}

