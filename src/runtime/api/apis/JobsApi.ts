/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorDescription,
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    JobConfig,
    JobConfigFromJSON,
    JobConfigToJSON,
    JobInformation,
    JobInformationFromJSON,
    JobInformationToJSON,
    JsonValueBoolean,
    JsonValueBooleanFromJSON,
    JsonValueBooleanToJSON,
} from '../models';

export interface DeleteJobRequest {
    jobGroup: string;
    jobName: string;
}

export interface ExecuteJobRequest {
    jobGroup: string;
    jobName: string;
}

export interface RegisterJobRequest {
    jobConfig: JobConfig;
}

export interface UpdateJobRequest {
    jobGroup: string;
    jobName: string;
    jobConfig: JobConfig;
}

/**
 * 
 */
export class JobsApi extends runtime.BaseAPI {

    /**
     * Delete Job and reload all Job Information
     * Delete Job
     */
    async deleteJobRaw(requestParameters: DeleteJobRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.jobGroup === null || requestParameters.jobGroup === undefined) {
            throw new runtime.RequiredError('jobGroup','Required parameter requestParameters.jobGroup was null or undefined when calling deleteJob.');
        }

        if (requestParameters.jobName === null || requestParameters.jobName === undefined) {
            throw new runtime.RequiredError('jobName','Required parameter requestParameters.jobName was null or undefined when calling deleteJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/system/jobs/{jobGroup}/{jobName}`.replace(`{${"jobGroup"}}`, encodeURIComponent(String(requestParameters.jobGroup))).replace(`{${"jobName"}}`, encodeURIComponent(String(requestParameters.jobName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete Job and reload all Job Information
     * Delete Job
     */
    async deleteJob(requestParameters: DeleteJobRequest, initOverrides?: RequestInit): Promise<JsonValueBoolean> {
        const response = await this.deleteJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Execute scheduled Job manually
     * Execute Job
     */
    async executeJobRaw(requestParameters: ExecuteJobRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.jobGroup === null || requestParameters.jobGroup === undefined) {
            throw new runtime.RequiredError('jobGroup','Required parameter requestParameters.jobGroup was null or undefined when calling executeJob.');
        }

        if (requestParameters.jobName === null || requestParameters.jobName === undefined) {
            throw new runtime.RequiredError('jobName','Required parameter requestParameters.jobName was null or undefined when calling executeJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/system/jobs/{jobGroup}/{jobName}`.replace(`{${"jobGroup"}}`, encodeURIComponent(String(requestParameters.jobGroup))).replace(`{${"jobName"}}`, encodeURIComponent(String(requestParameters.jobName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Execute scheduled Job manually
     * Execute Job
     */
    async executeJob(requestParameters: ExecuteJobRequest, initOverrides?: RequestInit): Promise<JsonValueBoolean> {
        const response = await this.executeJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the List of all registered Jobs with full information
     * Registered Jobs
     */
    async jobsListRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<JobInformation>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/system/jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(JobInformationFromJSON));
    }

    /**
     * Returns the List of all registered Jobs with full information
     * Registered Jobs
     */
    async jobsList(initOverrides?: RequestInit): Promise<Array<JobInformation>> {
        const response = await this.jobsListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the List of possible job classes
     * Possible Jobs
     */
    async possibleJobsListRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/system/jobs/classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns the List of possible job classes
     * Possible Jobs
     */
    async possibleJobsList(initOverrides?: RequestInit): Promise<Array<string>> {
        const response = await this.possibleJobsListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Register an Job and return the JobInformation with next schedule information
     * Register Job
     */
    async registerJobRaw(requestParameters: RegisterJobRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobInformation>> {
        if (requestParameters.jobConfig === null || requestParameters.jobConfig === undefined) {
            throw new runtime.RequiredError('jobConfig','Required parameter requestParameters.jobConfig was null or undefined when calling registerJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/system/jobs`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: JobConfigToJSON(requestParameters.jobConfig),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobInformationFromJSON(jsonValue));
    }

    /**
     * Register an Job and return the JobInformation with next schedule information
     * Register Job
     */
    async registerJob(requestParameters: RegisterJobRequest, initOverrides?: RequestInit): Promise<JobInformation> {
        const response = await this.registerJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add Job and get JobInformation back
     * Update Job
     */
    async updateJobRaw(requestParameters: UpdateJobRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JobInformation>> {
        if (requestParameters.jobGroup === null || requestParameters.jobGroup === undefined) {
            throw new runtime.RequiredError('jobGroup','Required parameter requestParameters.jobGroup was null or undefined when calling updateJob.');
        }

        if (requestParameters.jobName === null || requestParameters.jobName === undefined) {
            throw new runtime.RequiredError('jobName','Required parameter requestParameters.jobName was null or undefined when calling updateJob.');
        }

        if (requestParameters.jobConfig === null || requestParameters.jobConfig === undefined) {
            throw new runtime.RequiredError('jobConfig','Required parameter requestParameters.jobConfig was null or undefined when calling updateJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("httpAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/system/jobs/{jobGroup}/{jobName}`.replace(`{${"jobGroup"}}`, encodeURIComponent(String(requestParameters.jobGroup))).replace(`{${"jobName"}}`, encodeURIComponent(String(requestParameters.jobName))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: JobConfigToJSON(requestParameters.jobConfig),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobInformationFromJSON(jsonValue));
    }

    /**
     * Add Job and get JobInformation back
     * Update Job
     */
    async updateJob(requestParameters: UpdateJobRequest, initOverrides?: RequestInit): Promise<JobInformation> {
        const response = await this.updateJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
