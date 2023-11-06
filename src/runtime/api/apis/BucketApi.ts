/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BucketInformation,
  ErrorDescription,
  JsonValueBoolean,
} from '../models/index';
import {
    BucketInformationFromJSON,
    BucketInformationToJSON,
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    JsonValueBooleanFromJSON,
    JsonValueBooleanToJSON,
} from '../models/index';

export interface ClearBucketRequest {
    bucketName: string;
}

export interface DeleteBucketRequest {
    bucketName: string;
}

export interface GetBucketRequest {
    bucketName: string;
}

/**
 * 
 */
export class BucketApi extends runtime.BaseAPI {

    /**
     * Delete all Files in Bucket
     * Clear Bucket
     */
    async clearBucketRaw(requestParameters: ClearBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling clearBucket.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/buckets/{bucketName}/clear`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete all Files in Bucket
     * Clear Bucket
     */
    async clearBucket(requestParameters: ClearBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.clearBucketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a given Bucket
     * Delete Bucket
     */
    async deleteBucketRaw(requestParameters: DeleteBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling deleteBucket.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/buckets/{bucketName}`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete a given Bucket
     * Delete Bucket
     */
    async deleteBucket(requestParameters: DeleteBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.deleteBucketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * All Information about a single Bucket
     * Bucket Information
     */
    async getBucketRaw(requestParameters: GetBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BucketInformation>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling getBucket.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/buckets/{bucketName}`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BucketInformationFromJSON(jsonValue));
    }

    /**
     * All Information about a single Bucket
     * Bucket Information
     */
    async getBucket(requestParameters: GetBucketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BucketInformation> {
        const response = await this.getBucketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of all Buckets of the default database
     * List of Buckets
     */
    async listBucketsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/buckets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List of all Buckets of the default database
     * List of Buckets
     */
    async listBuckets(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.listBucketsRaw(initOverrides);
        return await response.value();
    }

}
