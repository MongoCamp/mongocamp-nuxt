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
  DatabaseInfo,
  ErrorDescription,
  JsonValueBoolean,
} from '../models/index';
import {
    DatabaseInfoFromJSON,
    DatabaseInfoToJSON,
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    JsonValueBooleanFromJSON,
    JsonValueBooleanToJSON,
} from '../models/index';

export interface DeleteDatabaseRequest {
    databaseName: string;
}

export interface GetDatabaseInfoRequest {
    databaseName: string;
}

export interface ListCollectionsByDatabaseRequest {
    databaseName: string;
}

/**
 * 
 */
export class DatabaseApi extends runtime.BaseAPI {

    /**
     * List of all Databases Infos
     * List of Database Infos
     */
    async databaseInfosRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DatabaseInfo>>> {
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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/databases/infos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatabaseInfoFromJSON));
    }

    /**
     * List of all Databases Infos
     * List of Database Infos
     */
    async databaseInfos(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DatabaseInfo>> {
        const response = await this.databaseInfosRaw(initOverrides);
        return await response.value();
    }

    /**
     * Delete given Database
     * Delete Database
     */
    async deleteDatabaseRaw(requestParameters: DeleteDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters['databaseName'] == null) {
            throw new runtime.RequiredError(
                'databaseName',
                'Required parameter "databaseName" was null or undefined when calling deleteDatabase().'
            );
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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/databases/{databaseName}`.replace(`{${"databaseName"}}`, encodeURIComponent(String(requestParameters['databaseName']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete given Database
     * Delete Database
     */
    async deleteDatabase(requestParameters: DeleteDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.deleteDatabaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * All Information about given Database
     * Database Infos of selected Database
     */
    async getDatabaseInfoRaw(requestParameters: GetDatabaseInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DatabaseInfo>> {
        if (requestParameters['databaseName'] == null) {
            throw new runtime.RequiredError(
                'databaseName',
                'Required parameter "databaseName" was null or undefined when calling getDatabaseInfo().'
            );
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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/databases/{databaseName}`.replace(`{${"databaseName"}}`, encodeURIComponent(String(requestParameters['databaseName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DatabaseInfoFromJSON(jsonValue));
    }

    /**
     * All Information about given Database
     * Database Infos of selected Database
     */
    async getDatabaseInfo(requestParameters: GetDatabaseInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DatabaseInfo> {
        const response = await this.getDatabaseInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of all Collections of the given database
     * List of Collections
     */
    async listCollectionsByDatabaseRaw(requestParameters: ListCollectionsByDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters['databaseName'] == null) {
            throw new runtime.RequiredError(
                'databaseName',
                'Required parameter "databaseName" was null or undefined when calling listCollectionsByDatabase().'
            );
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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/databases/{databaseName}/collections`.replace(`{${"databaseName"}}`, encodeURIComponent(String(requestParameters['databaseName']))),
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

    /**
     * List of all Databases
     * List of Databases
     */
    async listDatabasesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/databases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List of all Databases
     * List of Databases
     */
    async listDatabases(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.listDatabasesRaw(initOverrides);
        return await response.value();
    }

}
