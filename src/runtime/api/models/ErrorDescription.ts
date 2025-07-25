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
 * @interface ErrorDescription
 */
export interface ErrorDescription {
    /**
     * 
     * @type {number}
     * @memberof ErrorDescription
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorDescription
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDescription
     */
    additionalInfo: string;
}

/**
 * Check if a given object implements the ErrorDescription interface.
 */
export function instanceOfErrorDescription(value: object): value is ErrorDescription {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('msg' in value) || value['msg'] === undefined) return false;
    if (!('additionalInfo' in value) || value['additionalInfo'] === undefined) return false;
    return true;
}

export function ErrorDescriptionFromJSON(json: any): ErrorDescription {
    return ErrorDescriptionFromJSONTyped(json, false);
}

export function ErrorDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDescription {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'msg': json['msg'],
        'additionalInfo': json['additionalInfo'],
    };
}

export function ErrorDescriptionToJSON(json: any): ErrorDescription {
    return ErrorDescriptionToJSONTyped(json, false);
}

export function ErrorDescriptionToJSONTyped(value?: ErrorDescription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'msg': value['msg'],
        'additionalInfo': value['additionalInfo'],
    };
}

