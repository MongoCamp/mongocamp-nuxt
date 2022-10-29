/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Grant,
    GrantFromJSON,
    GrantFromJSONTyped,
    GrantToJSON,
} from './Grant';

/**
 * 
 * @export
 * @interface UpdateRoleRequest
 */
export interface UpdateRoleRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateRoleRequest
     */
    isAdmin: boolean;
    /**
     * 
     * @type {Array<Grant>}
     * @memberof UpdateRoleRequest
     */
    collectionGrants?: Array<Grant>;
}

export function UpdateRoleRequestFromJSON(json: any): UpdateRoleRequest {
    return UpdateRoleRequestFromJSONTyped(json, false);
}

export function UpdateRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRoleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isAdmin': json['isAdmin'],
        'collectionGrants': !exists(json, 'collectionGrants') ? undefined : ((json['collectionGrants'] as Array<any>).map(GrantFromJSON)),
    };
}

export function UpdateRoleRequestToJSON(value?: UpdateRoleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isAdmin': value.isAdmin,
        'collectionGrants': value.collectionGrants === undefined ? undefined : ((value.collectionGrants as Array<any>).map(GrantToJSON)),
    };
}

