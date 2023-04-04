/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.4.0
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
 * @interface Measurement
 */
export interface Measurement {
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    statisticType: string;
    /**
     * 
     * @type {number}
     * @memberof Measurement
     */
    value: number;
}

export function MeasurementFromJSON(json: any): Measurement {
    return MeasurementFromJSONTyped(json, false);
}

export function MeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Measurement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statisticType': json['statisticType'],
        'value': json['value'],
    };
}

export function MeasurementToJSON(value?: Measurement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statisticType': value.statisticType,
        'value': value.value,
    };
}

