/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.4.1
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
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    user: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserProfile
     */
    isAdmin: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserProfile
     */
    apiKey?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserProfile
     */
    roles?: Array<string>;
    /**
     * 
     * @type {Array<Grant>}
     * @memberof UserProfile
     */
    grants?: Array<Grant>;
}

/**
 * Check if a given object implements the UserProfile interface.
 */
export function instanceOfUserProfile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "isAdmin" in value;

    return isInstance;
}

export function UserProfileFromJSON(json: any): UserProfile {
    return UserProfileFromJSONTyped(json, false);
}

export function UserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': json['user'],
        'isAdmin': json['isAdmin'],
        'apiKey': !exists(json, 'apiKey') ? undefined : json['apiKey'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'grants': !exists(json, 'grants') ? undefined : ((json['grants'] as Array<any>).map(GrantFromJSON)),
    };
}

export function UserProfileToJSON(value?: UserProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': value.user,
        'isAdmin': value.isAdmin,
        'apiKey': value.apiKey,
        'roles': value.roles,
        'grants': value.grants === undefined ? undefined : ((value.grants as Array<any>).map(GrantToJSON)),
    };
}

