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
/**
 * 
 * @export
 * @interface IndexCreateResponse
 */
export interface IndexCreateResponse {
    /**
     * 
     * @type {string}
     * @memberof IndexCreateResponse
     */
    name: string;
}

export function IndexCreateResponseFromJSON(json: any): IndexCreateResponse {
    return IndexCreateResponseFromJSONTyped(json, false);
}

export function IndexCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function IndexCreateResponseToJSON(value?: IndexCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

