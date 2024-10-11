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
import type { SchemaAnalysisFieldType } from './SchemaAnalysisFieldType';
import {
    SchemaAnalysisFieldTypeFromJSON,
    SchemaAnalysisFieldTypeFromJSONTyped,
    SchemaAnalysisFieldTypeToJSON,
    SchemaAnalysisFieldTypeToJSONTyped,
} from './SchemaAnalysisFieldType';

/**
 * 
 * @export
 * @interface SchemaAnalysisField
 */
export interface SchemaAnalysisField {
    /**
     * 
     * @type {string}
     * @memberof SchemaAnalysisField
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaAnalysisField
     */
    fullName: string;
    /**
     * 
     * @type {Array<SchemaAnalysisFieldType>}
     * @memberof SchemaAnalysisField
     */
    fieldTypes?: Array<SchemaAnalysisFieldType>;
    /**
     * 
     * @type {number}
     * @memberof SchemaAnalysisField
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaAnalysisField
     */
    percentageOfParent: number;
    /**
     * 
     * @type {Array<SchemaAnalysisField>}
     * @memberof SchemaAnalysisField
     */
    subFields?: Array<SchemaAnalysisField>;
}

/**
 * Check if a given object implements the SchemaAnalysisField interface.
 */
export function instanceOfSchemaAnalysisField(value: object): value is SchemaAnalysisField {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('fullName' in value) || value['fullName'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('percentageOfParent' in value) || value['percentageOfParent'] === undefined) return false;
    return true;
}

export function SchemaAnalysisFieldFromJSON(json: any): SchemaAnalysisField {
    return SchemaAnalysisFieldFromJSONTyped(json, false);
}

export function SchemaAnalysisFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaAnalysisField {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'fullName': json['fullName'],
        'fieldTypes': json['fieldTypes'] == null ? undefined : ((json['fieldTypes'] as Array<any>).map(SchemaAnalysisFieldTypeFromJSON)),
        'count': json['count'],
        'percentageOfParent': json['percentageOfParent'],
        'subFields': json['subFields'] == null ? undefined : ((json['subFields'] as Array<any>).map(SchemaAnalysisFieldFromJSON)),
    };
}

  export function SchemaAnalysisFieldToJSON(json: any): SchemaAnalysisField {
      return SchemaAnalysisFieldToJSONTyped(json, false);
  }

  export function SchemaAnalysisFieldToJSONTyped(value?: SchemaAnalysisField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'fullName': value['fullName'],
        'fieldTypes': value['fieldTypes'] == null ? undefined : ((value['fieldTypes'] as Array<any>).map(SchemaAnalysisFieldTypeToJSON)),
        'count': value['count'],
        'percentageOfParent': value['percentageOfParent'],
        'subFields': value['subFields'] == null ? undefined : ((value['subFields'] as Array<any>).map(SchemaAnalysisFieldToJSON)),
    };
}

