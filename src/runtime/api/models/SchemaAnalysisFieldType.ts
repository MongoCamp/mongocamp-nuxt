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
 * @interface SchemaAnalysisFieldType
 */
export interface SchemaAnalysisFieldType {
    /**
     * 
     * @type {string}
     * @memberof SchemaAnalysisFieldType
     */
    fieldType: string;
    /**
     * 
     * @type {number}
     * @memberof SchemaAnalysisFieldType
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaAnalysisFieldType
     */
    percentageOfParent: number;
}

export function SchemaAnalysisFieldTypeFromJSON(json: any): SchemaAnalysisFieldType {
    return SchemaAnalysisFieldTypeFromJSONTyped(json, false);
}

export function SchemaAnalysisFieldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaAnalysisFieldType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fieldType': json['fieldType'],
        'count': json['count'],
        'percentageOfParent': json['percentageOfParent'],
    };
}

export function SchemaAnalysisFieldTypeToJSON(value?: SchemaAnalysisFieldType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fieldType': value.fieldType,
        'count': value.count,
        'percentageOfParent': value.percentageOfParent,
    };
}

