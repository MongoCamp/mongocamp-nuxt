/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CollectionStatus,
  ErrorDescription,
  JsonSchema,
  JsonValueBoolean,
  MongoAggregateRequest,
  SchemaAnalysis,
} from '../models/index';
import {
    CollectionStatusFromJSON,
    CollectionStatusToJSON,
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    JsonSchemaFromJSON,
    JsonSchemaToJSON,
    JsonValueBooleanFromJSON,
    JsonValueBooleanToJSON,
    MongoAggregateRequestFromJSON,
    MongoAggregateRequestToJSON,
    SchemaAnalysisFromJSON,
    SchemaAnalysisToJSON,
} from '../models/index';

export interface AggregateRequest {
    collectionName: string;
    mongoAggregateRequest: MongoAggregateRequest;
    rowsPerPage?: number;
    page?: number;
}

export interface ClearCollectionRequest {
    collectionName: string;
}

export interface DeleteCollectionRequest {
    collectionName: string;
}

export interface DistinctRequest {
    collectionName: string;
    field: string;
    rowsPerPage?: number;
    page?: number;
}

export interface GetCollectionFieldsRequest {
    collectionName: string;
    sampleSize?: number;
}

export interface GetCollectionInformationRequest {
    collectionName: string;
    includeDetails?: boolean;
}

export interface GetJsonSchemaRequest {
    collectionName: string;
    sampleSize?: number;
    deepth?: number;
}

export interface GetSchemaAnalysisRequest {
    collectionName: string;
    sampleSize?: number;
    deepth?: number;
}

export interface ListCollectionsByDatabaseRequest {
    databaseName: string;
}

/**
 * 
 */
export class CollectionApi extends runtime.BaseAPI {

    /**
     * Aggregate in a given Collection
     * Aggregate in Collection
     */
    async aggregateRaw(requestParameters: AggregateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<{ [key: string]: string; }>>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling aggregate.');
        }

        if (requestParameters.mongoAggregateRequest === null || requestParameters.mongoAggregateRequest === undefined) {
            throw new runtime.RequiredError('mongoAggregateRequest','Required parameter requestParameters.mongoAggregateRequest was null or undefined when calling aggregate.');
        }

        const queryParameters: any = {};

        if (requestParameters.rowsPerPage !== undefined) {
            queryParameters['rowsPerPage'] = requestParameters.rowsPerPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/mongodb/collections/{collectionName}/aggregate`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoAggregateRequestToJSON(requestParameters.mongoAggregateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Aggregate in a given Collection
     * Aggregate in Collection
     */
    async aggregate(requestParameters: AggregateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<{ [key: string]: string; }>> {
        const response = await this.aggregateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete all Document in Collection
     * Clear Collection
     */
    async clearCollectionRaw(requestParameters: ClearCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling clearCollection.');
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
            path: `/mongodb/collections/{collectionName}/clear`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete all Document in Collection
     * Clear Collection
     */
    async clearCollection(requestParameters: ClearCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.clearCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a given Collection
     * Delete Collection
     */
    async deleteCollectionRaw(requestParameters: DeleteCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling deleteCollection.');
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
            path: `/mongodb/collections/{collectionName}`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete a given Collection
     * Delete Collection
     */
    async deleteCollection(requestParameters: DeleteCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.deleteCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Distinct for Field in a given Collection
     * Distinct in Collection
     */
    async distinctRaw(requestParameters: DistinctRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling distinct.');
        }

        if (requestParameters.field === null || requestParameters.field === undefined) {
            throw new runtime.RequiredError('field','Required parameter requestParameters.field was null or undefined when calling distinct.');
        }

        const queryParameters: any = {};

        if (requestParameters.rowsPerPage !== undefined) {
            queryParameters['rowsPerPage'] = requestParameters.rowsPerPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

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
            path: `/mongodb/collections/{collectionName}/distinct/{field}`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))).replace(`{${"field"}}`, encodeURIComponent(String(requestParameters.field))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Distinct for Field in a given Collection
     * Distinct in Collection
     */
    async distinct(requestParameters: DistinctRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.distinctRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the Fields in a given collection
     * Collection Fields
     */
    async getCollectionFieldsRaw(requestParameters: GetCollectionFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling getCollectionFields.');
        }

        const queryParameters: any = {};

        if (requestParameters.sampleSize !== undefined) {
            queryParameters['sample size'] = requestParameters.sampleSize;
        }

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
            path: `/mongodb/collections/{collectionName}/fields`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List the Fields in a given collection
     * Collection Fields
     */
    async getCollectionFields(requestParameters: GetCollectionFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.getCollectionFieldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * All Information about a single Collection
     * Collection Information
     */
    async getCollectionInformationRaw(requestParameters: GetCollectionInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionStatus>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling getCollectionInformation.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeDetails !== undefined) {
            queryParameters['includeDetails'] = requestParameters.includeDetails;
        }

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
            path: `/mongodb/collections/{collectionName}`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionStatusFromJSON(jsonValue));
    }

    /**
     * All Information about a single Collection
     * Collection Information
     */
    async getCollectionInformation(requestParameters: GetCollectionInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionStatus> {
        const response = await this.getCollectionInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the Fields in a given collection
     * Collection Fields
     */
    async getJsonSchemaRaw(requestParameters: GetJsonSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonSchema>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling getJsonSchema.');
        }

        const queryParameters: any = {};

        if (requestParameters.sampleSize !== undefined) {
            queryParameters['sampleSize'] = requestParameters.sampleSize;
        }

        if (requestParameters.deepth !== undefined) {
            queryParameters['deepth'] = requestParameters.deepth;
        }

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
            path: `/mongodb/collections/{collectionName}/schema`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonSchemaFromJSON(jsonValue));
    }

    /**
     * List the Fields in a given collection
     * Collection Fields
     */
    async getJsonSchema(requestParameters: GetJsonSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonSchema> {
        const response = await this.getJsonSchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the Fields in a given collection
     * Collection Fields
     */
    async getSchemaAnalysisRaw(requestParameters: GetSchemaAnalysisRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaAnalysis>> {
        if (requestParameters.collectionName === null || requestParameters.collectionName === undefined) {
            throw new runtime.RequiredError('collectionName','Required parameter requestParameters.collectionName was null or undefined when calling getSchemaAnalysis.');
        }

        const queryParameters: any = {};

        if (requestParameters.sampleSize !== undefined) {
            queryParameters['sampleSize'] = requestParameters.sampleSize;
        }

        if (requestParameters.deepth !== undefined) {
            queryParameters['deepth'] = requestParameters.deepth;
        }

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
            path: `/mongodb/collections/{collectionName}/schema/analysis`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters.collectionName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaAnalysisFromJSON(jsonValue));
    }

    /**
     * List the Fields in a given collection
     * Collection Fields
     */
    async getSchemaAnalysis(requestParameters: GetSchemaAnalysisRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaAnalysis> {
        const response = await this.getSchemaAnalysisRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of all Collections of the default database
     * List of Collections
     */
    async listCollectionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
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
            path: `/mongodb/collections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List of all Collections of the default database
     * List of Collections
     */
    async listCollections(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.listCollectionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * List of all Collections of the given database
     * List of Collections
     */
    async listCollectionsByDatabaseRaw(requestParameters: ListCollectionsByDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.databaseName === null || requestParameters.databaseName === undefined) {
            throw new runtime.RequiredError('databaseName','Required parameter requestParameters.databaseName was null or undefined when calling listCollectionsByDatabase.');
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
            path: `/mongodb/databases/{databaseName}/collections`.replace(`{${"databaseName"}}`, encodeURIComponent(String(requestParameters.databaseName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List of all Collections of the given database
     * List of Collections
     */
    async listCollectionsByDatabase(requestParameters: ListCollectionsByDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.listCollectionsByDatabaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
