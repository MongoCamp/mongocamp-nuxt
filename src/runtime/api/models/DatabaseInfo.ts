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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DatabaseInfo
 */
export interface DatabaseInfo {
    /**
     * 
     * @type {string}
     * @memberof DatabaseInfo
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof DatabaseInfo
     */
    sizeOnDisk: number;
    /**
     * 
     * @type {boolean}
     * @memberof DatabaseInfo
     */
    empty: boolean;
    /**
     * 
     * @type {Date}
     * @memberof DatabaseInfo
     */
    fetched: Date;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DatabaseInfo
     */
    map: { [key: string]: string; };
}

/**
 * Check if a given object implements the DatabaseInfo interface.
 */
export function instanceOfDatabaseInfo(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('sizeOnDisk' in value)) return false;
    if (!('empty' in value)) return false;
    if (!('fetched' in value)) return false;
    if (!('map' in value)) return false;
    return true;
}

export function DatabaseInfoFromJSON(json: any): DatabaseInfo {
    return DatabaseInfoFromJSONTyped(json, false);
}

export function DatabaseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatabaseInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'sizeOnDisk': json['sizeOnDisk'],
        'empty': json['empty'],
        'fetched': (new Date(json['fetched'])),
        'map': json['map'],
    };
}

export function DatabaseInfoToJSON(value?: DatabaseInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'sizeOnDisk': value['sizeOnDisk'],
        'empty': value['empty'],
        'fetched': ((value['fetched']).toISOString()),
        'map': value['map'],
    };
}

