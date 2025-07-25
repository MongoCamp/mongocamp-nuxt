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
 * @interface MongoCampConfiguration
 */
export interface MongoCampConfiguration {
    /**
     * 
     * @type {string}
     * @memberof MongoCampConfiguration
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof MongoCampConfiguration
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof MongoCampConfiguration
     */
    configType: string;
    /**
     * 
     * @type {string}
     * @memberof MongoCampConfiguration
     */
    comment: string;
    /**
     * 
     * @type {boolean}
     * @memberof MongoCampConfiguration
     */
    needsRestartForActivation: boolean;
}

/**
 * Check if a given object implements the MongoCampConfiguration interface.
 */
export function instanceOfMongoCampConfiguration(value: object): value is MongoCampConfiguration {
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('configType' in value) || value['configType'] === undefined) return false;
    if (!('comment' in value) || value['comment'] === undefined) return false;
    if (!('needsRestartForActivation' in value) || value['needsRestartForActivation'] === undefined) return false;
    return true;
}

export function MongoCampConfigurationFromJSON(json: any): MongoCampConfiguration {
    return MongoCampConfigurationFromJSONTyped(json, false);
}

export function MongoCampConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MongoCampConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
        'configType': json['configType'],
        'comment': json['comment'],
        'needsRestartForActivation': json['needsRestartForActivation'],
    };
}

export function MongoCampConfigurationToJSON(json: any): MongoCampConfiguration {
    return MongoCampConfigurationToJSONTyped(json, false);
}

export function MongoCampConfigurationToJSONTyped(value?: MongoCampConfiguration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key': value['key'],
        'value': value['value'],
        'configType': value['configType'],
        'comment': value['comment'],
        'needsRestartForActivation': value['needsRestartForActivation'],
    };
}

