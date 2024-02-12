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
import type { Grant } from './Grant';
import {
    GrantFromJSON,
    GrantFromJSONTyped,
    GrantToJSON,
} from './Grant';

/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof Role
     */
    isAdmin: boolean;
    /**
     * 
     * @type {Array<Grant>}
     * @memberof Role
     */
    collectionGrants?: Array<Grant>;
}

/**
 * Check if a given object implements the Role interface.
 */
export function instanceOfRole(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "isAdmin" in value;

    return isInstance;
}

export function RoleFromJSON(json: any): Role {
    return RoleFromJSONTyped(json, false);
}

export function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'isAdmin': json['isAdmin'],
        'collectionGrants': !exists(json, 'collectionGrants') ? undefined : ((json['collectionGrants'] as Array<any>).map(GrantFromJSON)),
    };
}

export function RoleToJSON(value?: Role | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'isAdmin': value.isAdmin,
        'collectionGrants': value.collectionGrants === undefined ? undefined : ((value.collectionGrants as Array<any>).map(GrantToJSON)),
    };
}

