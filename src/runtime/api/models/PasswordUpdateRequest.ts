/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.8
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

/**
 * Check if a given object implements the PasswordUpdateRequest interface.
 */
export function instanceOfPasswordUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "password" in value;

    return isInstance;
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

