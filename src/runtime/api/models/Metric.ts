/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Measurement,
    MeasurementFromJSON,
    MeasurementFromJSONTyped,
    MeasurementToJSON,
} from './Measurement';

/**
 * 
 * @export
 * @interface Metric
 */
export interface Metric {
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    metricsType: string;
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Metric
     */
    baseUnit: string;
    /**
     * 
     * @type {Array<Measurement>}
     * @memberof Metric
     */
    measurements?: Array<Measurement>;
}

export function MetricFromJSON(json: any): Metric {
    return MetricFromJSONTyped(json, false);
}

export function MetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): Metric {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'metricsType': json['metricsType'],
        'description': json['description'],
        'baseUnit': json['baseUnit'],
        'measurements': !exists(json, 'measurements') ? undefined : ((json['measurements'] as Array<any>).map(MeasurementFromJSON)),
    };
}

export function MetricToJSON(value?: Metric | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'metricsType': value.metricsType,
        'description': value.description,
        'baseUnit': value.baseUnit,
        'measurements': value.measurements === undefined ? undefined : ((value.measurements as Array<any>).map(MeasurementToJSON)),
    };
}

