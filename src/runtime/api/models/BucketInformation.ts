/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.1
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

export function BucketInformationFromJSON(json: any): BucketInformation {
    return BucketInformationFromJSONTyped(json, false);
}

export function BucketInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BucketInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'files': json['files'],
        'size': json['size'],
        'avgObjectSize': json['avgObjectSize'],
    };
}

export function BucketInformationToJSON(value?: BucketInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'files': value.files,
        'size': value.size,
        'avgObjectSize': value.avgObjectSize,
    };
}

