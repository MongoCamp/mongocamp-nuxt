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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface JsonValueString
 */
export interface JsonValueString {
    /**
     * 
     * @type {string}
     * @memberof JsonValueString
     */
    value: string;
}

/**
 * Check if a given object implements the JsonValueString interface.
 */
export function instanceOfJsonValueString(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function JsonValueStringFromJSON(json: any): JsonValueString {
    return JsonValueStringFromJSONTyped(json, false);
}

export function JsonValueStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonValueString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function JsonValueStringToJSON(value?: JsonValueString | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}

