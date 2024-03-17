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
 * @interface JobConfig
 */
export interface JobConfig {
    /**
     * 
     * @type {string}
     * @memberof JobConfig
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof JobConfig
     */
    className: string;
    /**
     * 
     * @type {string}
     * @memberof JobConfig
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof JobConfig
     */
    cronExpression: string;
    /**
     * 
     * @type {string}
     * @memberof JobConfig
     */
    group: string;
    /**
     * 
     * @type {number}
     * @memberof JobConfig
     */
    priority: number;
}

/**
 * Check if a given object implements the JobConfig interface.
 */
export function instanceOfJobConfig(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('className' in value)) return false;
    if (!('description' in value)) return false;
    if (!('cronExpression' in value)) return false;
    if (!('group' in value)) return false;
    if (!('priority' in value)) return false;
    return true;
}

export function JobConfigFromJSON(json: any): JobConfig {
    return JobConfigFromJSONTyped(json, false);
}

export function JobConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'className': json['className'],
        'description': json['description'],
        'cronExpression': json['cronExpression'],
        'group': json['group'],
        'priority': json['priority'],
    };
}

export function JobConfigToJSON(value?: JobConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'className': value['className'],
        'description': value['description'],
        'cronExpression': value['cronExpression'],
        'group': value['group'],
        'priority': value['priority'],
    };
}

