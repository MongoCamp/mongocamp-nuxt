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
 * @interface CollectionStatus
 */
export interface CollectionStatus {
    /**
     * 
     * @type {string}
     * @memberof CollectionStatus
     */
    ns: string;
    /**
     * 
     * @type {string}
     * @memberof CollectionStatus
     */
    collectionType: string;
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    scaleFactor: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    storageSize: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    avgObjSize: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    nindexes: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof CollectionStatus
     */
    indexSizes: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    totalIndexSize: number;
    /**
     * 
     * @type {number}
     * @memberof CollectionStatus
     */
    ok: number;
    /**
     * 
     * @type {Date}
     * @memberof CollectionStatus
     */
    fetched: Date;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CollectionStatus
     */
    map: { [key: string]: string; };
}

export function CollectionStatusFromJSON(json: any): CollectionStatus {
    return CollectionStatusFromJSONTyped(json, false);
}

export function CollectionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ns': json['ns'],
        'collectionType': json['collectionType'],
        'scaleFactor': json['scaleFactor'],
        'size': json['size'],
        'count': json['count'],
        'storageSize': json['storageSize'],
        'avgObjSize': json['avgObjSize'],
        'nindexes': json['nindexes'],
        'indexSizes': json['indexSizes'],
        'totalIndexSize': json['totalIndexSize'],
        'ok': json['ok'],
        'fetched': (new Date(json['fetched'])),
        'map': json['map'],
    };
}

export function CollectionStatusToJSON(value?: CollectionStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ns': value.ns,
        'collectionType': value.collectionType,
        'scaleFactor': value.scaleFactor,
        'size': value.size,
        'count': value.count,
        'storageSize': value.storageSize,
        'avgObjSize': value.avgObjSize,
        'nindexes': value.nindexes,
        'indexSizes': value.indexSizes,
        'totalIndexSize': value.totalIndexSize,
        'ok': value.ok,
        'fetched': (value.fetched.toISOString()),
        'map': value.map,
    };
}

