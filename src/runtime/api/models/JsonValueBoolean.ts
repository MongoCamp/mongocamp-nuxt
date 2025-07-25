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
 * @interface JsonValueBoolean
 */
export interface JsonValueBoolean {
    /**
     * 
     * @type {boolean}
     * @memberof JsonValueBoolean
     */
    value: boolean;
}

/**
 * Check if a given object implements the JsonValueBoolean interface.
 */
export function instanceOfJsonValueBoolean(value: object): value is JsonValueBoolean {
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function JsonValueBooleanFromJSON(json: any): JsonValueBoolean {
    return JsonValueBooleanFromJSONTyped(json, false);
}

export function JsonValueBooleanFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonValueBoolean {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function JsonValueBooleanToJSON(json: any): JsonValueBoolean {
    return JsonValueBooleanToJSONTyped(json, false);
}

export function JsonValueBooleanToJSONTyped(value?: JsonValueBoolean | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
    };
}

