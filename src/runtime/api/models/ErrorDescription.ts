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
export function instanceOfErrorDescription(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "msg" in value;
    isInstance = isInstance && "additionalInfo" in value;

    return isInstance;
}

export function ErrorDescriptionFromJSON(json: any): ErrorDescription {
    return ErrorDescriptionFromJSONTyped(json, false);
}

export function ErrorDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'msg': json['msg'],
        'additionalInfo': json['additionalInfo'],
    };
}

export function ErrorDescriptionToJSON(value?: ErrorDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'msg': value.msg,
        'additionalInfo': value.additionalInfo,
    };
}

