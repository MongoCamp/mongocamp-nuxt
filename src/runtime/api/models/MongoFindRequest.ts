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
 * @interface MongoFindRequest
 */
export interface MongoFindRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MongoFindRequest
     */
    filter: { [key: string]: string; } | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MongoFindRequest
     */
    sort: { [key: string]: string; } | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MongoFindRequest
     */
    projection: { [key: string]: string; } | null;
}

/**
 * Check if a given object implements the MongoFindRequest interface.
 */
export function instanceOfMongoFindRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "filter" in value;
    isInstance = isInstance && "sort" in value;
    isInstance = isInstance && "projection" in value;

    return isInstance;
}

export function MongoFindRequestFromJSON(json: any): MongoFindRequest {
    return MongoFindRequestFromJSONTyped(json, false);
}

export function MongoFindRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MongoFindRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filter': json['filter'],
        'sort': json['sort'],
        'projection': json['projection'],
    };
}

export function MongoFindRequestToJSON(value?: MongoFindRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filter': value.filter,
        'sort': value.sort,
        'projection': value.projection,
    };
}

