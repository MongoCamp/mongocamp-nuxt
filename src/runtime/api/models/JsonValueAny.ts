/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.9
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
 * @interface JsonValueAny
 */
export interface JsonValueAny {
    /**
     * 
     * @type {string}
     * @memberof JsonValueAny
     */
    value: string;
}

/**
 * Check if a given object implements the JsonValueAny interface.
 */
export function instanceOfJsonValueAny(value: object): value is JsonValueAny {
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function JsonValueAnyFromJSON(json: any): JsonValueAny {
    return JsonValueAnyFromJSONTyped(json, false);
}

export function JsonValueAnyFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonValueAny {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function JsonValueAnyToJSON(value?: JsonValueAny | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
    };
}

