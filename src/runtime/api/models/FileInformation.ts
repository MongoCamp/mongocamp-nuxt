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
 * @interface FileInformation
 */
export interface FileInformation {
    /**
     * 
     * @type {string}
     * @memberof FileInformation
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FileInformation
     */
    filename: string;
    /**
     * 
     * @type {number}
     * @memberof FileInformation
     */
    length: number;
    /**
     * 
     * @type {number}
     * @memberof FileInformation
     */
    chunkSize: number;
    /**
     * 
     * @type {Date}
     * @memberof FileInformation
     */
    uploadDate: Date;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof FileInformation
     */
    metadata: { [key: string]: string; };
}

export function FileInformationFromJSON(json: any): FileInformation {
    return FileInformationFromJSONTyped(json, false);
}

export function FileInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['_id'],
        'filename': json['filename'],
        'length': json['length'],
        'chunkSize': json['chunkSize'],
        'uploadDate': (new Date(json['uploadDate'])),
        'metadata': json['metadata'],
    };
}

export function FileInformationToJSON(value?: FileInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_id': value.id,
        'filename': value.filename,
        'length': value.length,
        'chunkSize': value.chunkSize,
        'uploadDate': (value.uploadDate.toISOString()),
        'metadata': value.metadata,
    };
}

