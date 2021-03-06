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
 * @interface MongoIndex
 */
export interface MongoIndex {
    /**
     * 
     * @type {string}
     * @memberof MongoIndex
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MongoIndex
     */
    fields?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof MongoIndex
     */
    unique: boolean;
    /**
     * 
     * @type {number}
     * @memberof MongoIndex
     */
    version: number;
    /**
     * 
     * @type {string}
     * @memberof MongoIndex
     */
    namespace: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MongoIndex
     */
    keys: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MongoIndex
     */
    weights: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof MongoIndex
     */
    expire: boolean;
    /**
     * 
     * @type {number}
     * @memberof MongoIndex
     */
    expireAfterSeconds: number;
    /**
     * 
     * @type {boolean}
     * @memberof MongoIndex
     */
    text: boolean;
    /**
     * 
     * @type {Date}
     * @memberof MongoIndex
     */
    fetched: Date;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MongoIndex
     */
    map: { [key: string]: string; };
}

export function MongoIndexFromJSON(json: any): MongoIndex {
    return MongoIndexFromJSONTyped(json, false);
}

export function MongoIndexFromJSONTyped(json: any, ignoreDiscriminator: boolean): MongoIndex {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'unique': json['unique'],
        'version': json['version'],
        'namespace': json['namespace'],
        'keys': json['keys'],
        'weights': json['weights'],
        'expire': json['expire'],
        'expireAfterSeconds': json['expireAfterSeconds'],
        'text': json['text'],
        'fetched': (new Date(json['fetched'])),
        'map': json['map'],
    };
}

export function MongoIndexToJSON(value?: MongoIndex | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'fields': value.fields,
        'unique': value.unique,
        'version': value.version,
        'namespace': value.namespace,
        'keys': value.keys,
        'weights': value.weights,
        'expire': value.expire,
        'expireAfterSeconds': value.expireAfterSeconds,
        'text': value.text,
        'fetched': (value.fetched.toISOString()),
        'map': value.map,
    };
}

