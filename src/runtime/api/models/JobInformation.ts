/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.2.0
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
 * @interface JobInformation
 */
export interface JobInformation {
    /**
     * 
     * @type {string}
     * @memberof JobInformation
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof JobInformation
     */
    group: string;
    /**
     * 
     * @type {string}
     * @memberof JobInformation
     */
    jobClassName: string;
    /**
     * 
     * @type {string}
     * @memberof JobInformation
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof JobInformation
     */
    cronExpression: string;
    /**
     * 
     * @type {number}
     * @memberof JobInformation
     */
    priority: number;
    /**
     * 
     * @type {Date}
     * @memberof JobInformation
     */
    lastScheduledFireTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof JobInformation
     */
    nextScheduledFireTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof JobInformation
     */
    scheduleInformation?: string;
}

export function JobInformationFromJSON(json: any): JobInformation {
    return JobInformationFromJSONTyped(json, false);
}

export function JobInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'group': json['group'],
        'jobClassName': json['jobClassName'],
        'description': json['description'],
        'cronExpression': json['cronExpression'],
        'priority': json['priority'],
        'lastScheduledFireTime': !exists(json, 'lastScheduledFireTime') ? undefined : (new Date(json['lastScheduledFireTime'])),
        'nextScheduledFireTime': !exists(json, 'nextScheduledFireTime') ? undefined : (new Date(json['nextScheduledFireTime'])),
        'scheduleInformation': !exists(json, 'scheduleInformation') ? undefined : json['scheduleInformation'],
    };
}

export function JobInformationToJSON(value?: JobInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'group': value.group,
        'jobClassName': value.jobClassName,
        'description': value.description,
        'cronExpression': value.cronExpression,
        'priority': value.priority,
        'lastScheduledFireTime': value.lastScheduledFireTime === undefined ? undefined : (value.lastScheduledFireTime.toISOString()),
        'nextScheduledFireTime': value.nextScheduledFireTime === undefined ? undefined : (value.nextScheduledFireTime.toISOString()),
        'scheduleInformation': value.scheduleInformation,
    };
}
