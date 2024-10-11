/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-library
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.5.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorDescription,
  JsonValueAny,
  JsonValueBoolean,
  MongoCampConfiguration,
  SettingsResponse,
} from '../models/index';
import {
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    JsonValueAnyFromJSON,
    JsonValueAnyToJSON,
    JsonValueBooleanFromJSON,
    JsonValueBooleanToJSON,
    MongoCampConfigurationFromJSON,
    MongoCampConfigurationToJSON,
    SettingsResponseFromJSON,
    SettingsResponseToJSON,
} from '../models/index';

export interface GetConfigRequest {
    configurationKey: string;
}

export interface ShutdownRequest {
    force?: boolean;
}

export interface UpdateConfigurationRequest {
    configurationKey: string;
    jsonValueAny: JsonValueAny;
}

/**
 * 
 */
export class ApplicationApi extends runtime.BaseAPI {

    /**
     * Get Configuration for key
     * Configuration for configurationKey
     */
    async getConfigRaw(requestParameters: GetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MongoCampConfiguration>> {
        if (requestParameters['configurationKey'] == null) {
            throw new runtime.RequiredError(
                'configurationKey',
                'Required parameter "configurationKey" was null or undefined when calling getConfig().'
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
            path: `/system/configurations/{configurationKey}`.replace(`{${"configurationKey"}}`, encodeURIComponent(String(requestParameters['configurationKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MongoCampConfigurationFromJSON(jsonValue));
    }

    /**
     * Get Configuration for key
     * Configuration for configurationKey
     */
    async getConfig(requestParameters: GetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MongoCampConfiguration> {
        const response = await this.getConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all Configurations or filtered
     * List Configurations
     */
    async listConfigurationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MongoCampConfiguration>>> {
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
            path: `/system/configurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MongoCampConfigurationFromJSON));
    }

    /**
     * List all Configurations or filtered
     * List Configurations
     */
    async listConfigurations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MongoCampConfiguration>> {
        const response = await this.listConfigurationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the Settings of the running MongoCamp Application.
     * System Settings
     */
    async settingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SettingsResponse>> {
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
            path: `/system/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingsResponseFromJSON(jsonValue));
    }

    /**
     * Returns the Settings of the running MongoCamp Application.
     * System Settings
     */
    async settings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SettingsResponse> {
        const response = await this.settingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Shutdown the running MongoCamp Application. CLI Mode will automatically restart the Application.
     * Shutdown MongoCamp
     */
    async shutdownRaw(requestParameters: ShutdownRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        const queryParameters: any = {};

        if (requestParameters['force'] != null) {
            queryParameters['force'] = requestParameters['force'];
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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/system`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Shutdown the running MongoCamp Application. CLI Mode will automatically restart the Application.
     * Shutdown MongoCamp
     */
    async shutdown(requestParameters: ShutdownRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.shutdownRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Configuration with the value
     * Update Configuration
     */
    async updateConfigurationRaw(requestParameters: UpdateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters['configurationKey'] == null) {
            throw new runtime.RequiredError(
                'configurationKey',
                'Required parameter "configurationKey" was null or undefined when calling updateConfiguration().'
            );
        }

        if (requestParameters['jsonValueAny'] == null) {
            throw new runtime.RequiredError(
                'jsonValueAny',
                'Required parameter "jsonValueAny" was null or undefined when calling updateConfiguration().'
            );
        }

        const queryParameters: any = {};

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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/system/configurations/{configurationKey}`.replace(`{${"configurationKey"}}`, encodeURIComponent(String(requestParameters['configurationKey']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: JsonValueAnyToJSON(requestParameters['jsonValueAny']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Update Configuration with the value
     * Update Configuration
     */
    async updateConfiguration(requestParameters: UpdateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.updateConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
