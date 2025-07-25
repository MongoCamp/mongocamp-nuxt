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

/**
 * Check if a given object implements the SchemaAnalysisFieldType interface.
 */
export function instanceOfSchemaAnalysisFieldType(value: object): value is SchemaAnalysisFieldType {
    if (!('fieldType' in value) || value['fieldType'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('percentageOfParent' in value) || value['percentageOfParent'] === undefined) return false;
    return true;
}

export function SchemaAnalysisFieldTypeFromJSON(json: any): SchemaAnalysisFieldType {
    return SchemaAnalysisFieldTypeFromJSONTyped(json, false);
}

export function SchemaAnalysisFieldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaAnalysisFieldType {
    if (json == null) {
        return json;
    }
    return {
        
        'fieldType': json['fieldType'],
        'count': json['count'],
        'percentageOfParent': json['percentageOfParent'],
    };
}

export function SchemaAnalysisFieldTypeToJSON(json: any): SchemaAnalysisFieldType {
    return SchemaAnalysisFieldTypeToJSONTyped(json, false);
}

export function SchemaAnalysisFieldTypeToJSONTyped(value?: SchemaAnalysisFieldType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fieldType': value['fieldType'],
        'count': value['count'],
        'percentageOfParent': value['percentageOfParent'],
    };
}

