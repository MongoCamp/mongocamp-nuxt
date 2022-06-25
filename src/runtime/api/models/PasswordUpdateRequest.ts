/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.13.0
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
 * @interface PasswordUpdateRequest
 */
export interface PasswordUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof PasswordUpdateRequest
     */
    password: string;
}

export function PasswordUpdateRequestFromJSON(json: any): PasswordUpdateRequest {
    return PasswordUpdateRequestFromJSONTyped(json, false);
}

export function PasswordUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': json['password'],
    };
}

export function PasswordUpdateRequestToJSON(value?: PasswordUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
    };
}

