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
/**
 * 
 * @export
 * @interface UpdateFileInformationRequest
 */
export interface UpdateFileInformationRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateFileInformationRequest
     */
    filename?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UpdateFileInformationRequest
     */
    metadata?: { [key: string]: string; };
}

export function UpdateFileInformationRequestFromJSON(json: any): UpdateFileInformationRequest {
    return UpdateFileInformationRequestFromJSONTyped(json, false);
}

export function UpdateFileInformationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFileInformationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function UpdateFileInformationRequestToJSON(value?: UpdateFileInformationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filename': value.filename,
        'metadata': value.metadata,
    };
}

