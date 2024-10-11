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
 * @interface BucketInformation
 */
export interface BucketInformation {
    /**
     * 
     * @type {string}
     * @memberof BucketInformation
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof BucketInformation
     */
    files: number;
    /**
     * 
     * @type {number}
     * @memberof BucketInformation
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof BucketInformation
     */
    avgObjectSize: number;
}

/**
 * Check if a given object implements the BucketInformation interface.
 */
export function instanceOfBucketInformation(value: object): value is BucketInformation {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('files' in value) || value['files'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('avgObjectSize' in value) || value['avgObjectSize'] === undefined) return false;
    return true;
}

export function BucketInformationFromJSON(json: any): BucketInformation {
    return BucketInformationFromJSONTyped(json, false);
}

export function BucketInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BucketInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'files': json['files'],
        'size': json['size'],
        'avgObjectSize': json['avgObjectSize'],
    };
}

  export function BucketInformationToJSON(json: any): BucketInformation {
      return BucketInformationToJSONTyped(json, false);
  }

  export function BucketInformationToJSONTyped(value?: BucketInformation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'files': value['files'],
        'size': value['size'],
        'avgObjectSize': value['avgObjectSize'],
    };
}

