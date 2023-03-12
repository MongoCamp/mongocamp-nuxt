/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.3
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
 * @interface IndexOptionsRequest
 */
export interface IndexOptionsRequest {
    /**
     * 
     * @type {string}
     * @memberof IndexOptionsRequest
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IndexOptionsRequest
     */
    background?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IndexOptionsRequest
     */
    defaultLanguage?: string;
    /**
     * 
     * @type {number}
     * @memberof IndexOptionsRequest
     */
    textVersion?: number;
    /**
     * 
     * @type {string}
     * @memberof IndexOptionsRequest
     */
    expireAfter?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IndexOptionsRequest
     */
    unique?: boolean;
    /**
     * 
     * @type {number}
     * @memberof IndexOptionsRequest
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof IndexOptionsRequest
     */
    min?: number;
}

export function IndexOptionsRequestFromJSON(json: any): IndexOptionsRequest {
    return IndexOptionsRequestFromJSONTyped(json, false);
}

export function IndexOptionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexOptionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'background': !exists(json, 'background') ? undefined : json['background'],
        'defaultLanguage': !exists(json, 'defaultLanguage') ? undefined : json['defaultLanguage'],
        'textVersion': !exists(json, 'textVersion') ? undefined : json['textVersion'],
        'expireAfter': !exists(json, 'expireAfter') ? undefined : json['expireAfter'],
        'unique': !exists(json, 'unique') ? undefined : json['unique'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'min': !exists(json, 'min') ? undefined : json['min'],
    };
}

export function IndexOptionsRequestToJSON(value?: IndexOptionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'background': value.background,
        'defaultLanguage': value.defaultLanguage,
        'textVersion': value.textVersion,
        'expireAfter': value.expireAfter,
        'unique': value.unique,
        'max': value.max,
        'min': value.min,
    };
}

