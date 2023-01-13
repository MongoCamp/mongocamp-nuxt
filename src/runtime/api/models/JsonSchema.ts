/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    JsonSchemaDefinition,
    JsonSchemaDefinitionFromJSON,
    JsonSchemaDefinitionFromJSONTyped,
    JsonSchemaDefinitionToJSON,
} from './JsonSchemaDefinition';

/**
 * 
 * @export
 * @interface JsonSchema
 */
export interface JsonSchema {
    /**
     * 
     * @type {string}
     * @memberof JsonSchema
     */
    $schema: string;
    /**
     * 
     * @type {string}
     * @memberof JsonSchema
     */
    $ref: string;
    /**
     * 
     * @type {{ [key: string]: JsonSchemaDefinition; }}
     * @memberof JsonSchema
     */
    definitions: { [key: string]: JsonSchemaDefinition; };
}

export function JsonSchemaFromJSON(json: any): JsonSchema {
    return JsonSchemaFromJSONTyped(json, false);
}

export function JsonSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '$schema': json['$schema'],
        '$ref': json['$ref'],
        'definitions': (mapValues(json['definitions'], JsonSchemaDefinitionFromJSON)),
    };
}

export function JsonSchemaToJSON(value?: JsonSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '$schema': value.$schema,
        '$ref': value.$ref,
        'definitions': (mapValues(value.definitions, JsonSchemaDefinitionToJSON)),
    };
}

