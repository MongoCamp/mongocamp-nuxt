/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SchemaAnalysisField } from './SchemaAnalysisField';
import {
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

/**
 * Check if a given object implements the SchemaAnalysis interface.
 */
export function instanceOfSchemaAnalysis(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "sample" in value;
    isInstance = isInstance && "percentageOfAnalysed" in value;

    return isInstance;
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

