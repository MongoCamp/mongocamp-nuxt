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

export function JsonValueBooleanFromJSON(json: any): JsonValueBoolean {
    return JsonValueBooleanFromJSONTyped(json, false);
}

export function JsonValueBooleanFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonValueBoolean {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function JsonValueBooleanToJSON(value?: JsonValueBoolean | null): any {
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

