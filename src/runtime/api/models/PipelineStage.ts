/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.13.0
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
 * @interface PipelineStage
 */
export interface PipelineStage {
    /**
     * 
     * @type {string}
     * @memberof PipelineStage
     */
    stage: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineStage
     */
    value: string;
}

export function PipelineStageFromJSON(json: any): PipelineStage {
    return PipelineStageFromJSONTyped(json, false);
}

export function PipelineStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineStage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stage': json['stage'],
        'value': json['value'],
    };
}

export function PipelineStageToJSON(value?: PipelineStage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stage': value.stage,
        'value': value.value,
    };
}

