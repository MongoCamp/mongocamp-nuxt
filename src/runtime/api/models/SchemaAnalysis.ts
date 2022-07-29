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
import {
    SchemaAnalysisField,
    SchemaAnalysisFieldFromJSON,
    SchemaAnalysisFieldFromJSONTyped,
    SchemaAnalysisFieldToJSON,
} from './SchemaAnalysisField';

/**
 * 
 * @export
 * @interface SchemaAnalysis
 */
export interface SchemaAnalysis {
    /**
     * 
     * @type {number}
     * @memberof SchemaAnalysis
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaAnalysis
     */
    sample: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaAnalysis
     */
    percentageOfAnalysed: number;
    /**
     * 
     * @type {Array<SchemaAnalysisField>}
     * @memberof SchemaAnalysis
     */
    fields?: Array<SchemaAnalysisField>;
}

export function SchemaAnalysisFromJSON(json: any): SchemaAnalysis {
    return SchemaAnalysisFromJSONTyped(json, false);
}

export function SchemaAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaAnalysis {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'sample': json['sample'],
        'percentageOfAnalysed': json['percentageOfAnalysed'],
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(SchemaAnalysisFieldFromJSON)),
    };
}

export function SchemaAnalysisToJSON(value?: SchemaAnalysis | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'sample': value.sample,
        'percentageOfAnalysed': value.percentageOfAnalysed,
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(SchemaAnalysisFieldToJSON)),
    };
}

