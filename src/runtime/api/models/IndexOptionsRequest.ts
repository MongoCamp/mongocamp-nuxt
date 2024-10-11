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

/**
 * Check if a given object implements the IndexOptionsRequest interface.
 */
export function instanceOfIndexOptionsRequest(value: object): value is IndexOptionsRequest {
    return true;
}

export function IndexOptionsRequestFromJSON(json: any): IndexOptionsRequest {
    return IndexOptionsRequestFromJSONTyped(json, false);
}

export function IndexOptionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexOptionsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'background': json['background'] == null ? undefined : json['background'],
        'defaultLanguage': json['defaultLanguage'] == null ? undefined : json['defaultLanguage'],
        'textVersion': json['textVersion'] == null ? undefined : json['textVersion'],
        'expireAfter': json['expireAfter'] == null ? undefined : json['expireAfter'],
        'unique': json['unique'] == null ? undefined : json['unique'],
        'max': json['max'] == null ? undefined : json['max'],
        'min': json['min'] == null ? undefined : json['min'],
    };
}

  export function IndexOptionsRequestToJSON(json: any): IndexOptionsRequest {
      return IndexOptionsRequestToJSONTyped(json, false);
  }

  export function IndexOptionsRequestToJSONTyped(value?: IndexOptionsRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'background': value['background'],
        'defaultLanguage': value['defaultLanguage'],
        'textVersion': value['textVersion'],
        'expireAfter': value['expireAfter'],
        'unique': value['unique'],
        'max': value['max'],
        'min': value['min'],
    };
}

