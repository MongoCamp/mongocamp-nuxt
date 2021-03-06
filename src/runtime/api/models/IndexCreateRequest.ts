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
import {
    IndexOptionsRequest,
    IndexOptionsRequestFromJSON,
    IndexOptionsRequestFromJSONTyped,
    IndexOptionsRequestToJSON,
} from './IndexOptionsRequest';

/**
 * 
 * @export
 * @interface IndexCreateRequest
 */
export interface IndexCreateRequest {
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof IndexCreateRequest
     */
    keys: { [key: string]: number; };
    /**
     * 
     * @type {IndexOptionsRequest}
     * @memberof IndexCreateRequest
     */
    indexOptionsRequest?: IndexOptionsRequest;
}

export function IndexCreateRequestFromJSON(json: any): IndexCreateRequest {
    return IndexCreateRequestFromJSONTyped(json, false);
}

export function IndexCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keys': json['keys'],
        'indexOptionsRequest': !exists(json, 'indexOptionsRequest') ? undefined : IndexOptionsRequestFromJSON(json['indexOptionsRequest']),
    };
}

export function IndexCreateRequestToJSON(value?: IndexCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'keys': value.keys,
        'indexOptionsRequest': IndexOptionsRequestToJSON(value.indexOptionsRequest),
    };
}

