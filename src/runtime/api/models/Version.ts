/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.13.0
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
 * @interface Version
 */
export interface Version {
    /**
     * 
     * @type {string}
     * @memberof Version
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Version
     */
    version: string;
    /**
     * 
     * @type {Date}
     * @memberof Version
     */
    builtAt: Date;
}

export function VersionFromJSON(json: any): Version {
    return VersionFromJSONTyped(json, false);
}

export function VersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Version {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'version': json['version'],
        'builtAt': (new Date(json['builtAt'])),
    };
}

export function VersionToJSON(value?: Version | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'version': value.version,
        'builtAt': (value.builtAt.toISOString()),
    };
}

