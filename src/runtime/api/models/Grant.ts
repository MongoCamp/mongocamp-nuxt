/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.4.2
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
 * @interface Grant
 */
export interface Grant {
    /**
     * 
     * @type {string}
     * @memberof Grant
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof Grant
     */
    read: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Grant
     */
    write: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Grant
     */
    administrate: boolean;
    /**
     * 
     * @type {string}
     * @memberof Grant
     */
    grantType: string;
}

/**
 * Check if a given object implements the Grant interface.
 */
export function instanceOfGrant(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "read" in value;
    isInstance = isInstance && "write" in value;
    isInstance = isInstance && "administrate" in value;
    isInstance = isInstance && "grantType" in value;

    return isInstance;
}

export function GrantFromJSON(json: any): Grant {
    return GrantFromJSONTyped(json, false);
}

export function GrantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Grant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'read': json['read'],
        'write': json['write'],
        'administrate': json['administrate'],
        'grantType': json['grantType'],
    };
}

export function GrantToJSON(value?: Grant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'read': value.read,
        'write': value.write,
        'administrate': value.administrate,
        'grantType': value.grantType,
    };
}

