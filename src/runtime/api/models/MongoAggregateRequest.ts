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
import {
    PipelineStage,
    PipelineStageFromJSON,
    PipelineStageFromJSONTyped,
    PipelineStageToJSON,
} from './PipelineStage';

/**
 * 
 * @export
 * @interface MongoAggregateRequest
 */
export interface MongoAggregateRequest {
    /**
     * 
     * @type {Array<PipelineStage>}
     * @memberof MongoAggregateRequest
     */
    pipeline?: Array<PipelineStage>;
    /**
     * 
     * @type {boolean}
     * @memberof MongoAggregateRequest
     */
    allowDiskUse: boolean;
}

export function MongoAggregateRequestFromJSON(json: any): MongoAggregateRequest {
    return MongoAggregateRequestFromJSONTyped(json, false);
}

export function MongoAggregateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MongoAggregateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pipeline': !exists(json, 'pipeline') ? undefined : ((json['pipeline'] as Array<any>).map(PipelineStageFromJSON)),
        'allowDiskUse': json['allowDiskUse'],
    };
}

export function MongoAggregateRequestToJSON(value?: MongoAggregateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pipeline': value.pipeline === undefined ? undefined : ((value.pipeline as Array<any>).map(PipelineStageToJSON)),
        'allowDiskUse': value.allowDiskUse,
    };
}

