/* tslint:disable */
/* eslint-disable */
/**
 * mongocamp-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.4.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DeleteResponse,
  ErrorDescription,
  FileInformation,
  InsertResponse,
  MongoFindRequest,
  UpdateFileInformationRequest,
  UpdateResponse,
} from '../models';
import {
    DeleteResponseFromJSON,
    DeleteResponseToJSON,
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    FileInformationFromJSON,
    FileInformationToJSON,
    InsertResponseFromJSON,
    InsertResponseToJSON,
    MongoFindRequestFromJSON,
    MongoFindRequestToJSON,
    UpdateFileInformationRequestFromJSON,
    UpdateFileInformationRequestToJSON,
    UpdateResponseFromJSON,
    UpdateResponseToJSON,
} from '../models';

export interface DeleteFileRequest {
    bucketName: string;
    fileId: string;
}

export interface FindFilesRequest {
    bucketName: string;
    mongoFindRequest: MongoFindRequest;
    rowsPerPage?: number;
    page?: number;
}

export interface GetFileRequest {
    bucketName: string;
    fileId: string;
}

export interface GetFileInformationRequest {
    bucketName: string;
    fileId: string;
}

export interface InsertFileRequest {
    bucketName: string;
    file: Blob;
    metaData: string;
    fileName?: string;
}

export interface ListFilesRequest {
    bucketName: string;
    filter?: string;
    sort?: string;
    projection?: string;
    rowsPerPage?: number;
    page?: number;
}

export interface UpdateFileInformationOperationRequest {
    bucketName: string;
    fileId: string;
    updateFileInformationRequest: UpdateFileInformationRequest;
}

/**
 * 
 */
export class FileApi extends runtime.BaseAPI {

    /**
     * Delete one File from given Bucket
     * Delete File from Bucket
     */
    async deleteFileRaw(requestParameters: DeleteFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteResponse>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling deleteFile.');
        }

        if (requestParameters.fileId === null || requestParameters.fileId === undefined) {
            throw new runtime.RequiredError('fileId','Required parameter requestParameters.fileId was null or undefined when calling deleteFile.');
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
            path: `/mongodb/buckets/{bucketName}/files/{fileId}`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))).replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters.fileId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteResponseFromJSON(jsonValue));
    }

    /**
     * Delete one File from given Bucket
     * Delete File from Bucket
     */
    async deleteFile(requestParameters: DeleteFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteResponse> {
        const response = await this.deleteFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Alternative to GET Route for more complex queries and URL max. Length
     * Files in Bucket
     */
    async findFilesRaw(requestParameters: FindFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FileInformation>>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling findFiles.');
        }

        if (requestParameters.mongoFindRequest === null || requestParameters.mongoFindRequest === undefined) {
            throw new runtime.RequiredError('mongoFindRequest','Required parameter requestParameters.mongoFindRequest was null or undefined when calling findFiles.');
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
            path: `/mongodb/buckets/{bucketName}/files`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoFindRequestToJSON(requestParameters.mongoFindRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FileInformationFromJSON));
    }

    /**
     * Alternative to GET Route for more complex queries and URL max. Length
     * Files in Bucket
     */
    async findFiles(requestParameters: FindFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FileInformation>> {
        const response = await this.findFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get File from given Bucket
     * File from Bucket
     */
    async getFileRaw(requestParameters: GetFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling getFile.');
        }

        if (requestParameters.fileId === null || requestParameters.fileId === undefined) {
            throw new runtime.RequiredError('fileId','Required parameter requestParameters.fileId was null or undefined when calling getFile.');
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
            path: `/mongodb/buckets/{bucketName}/files/{fileId}/file`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))).replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters.fileId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Get File from given Bucket
     * File from Bucket
     */
    async getFile(requestParameters: GetFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get one FileInformation from given Bucket
     * FileInformation from Bucket
     */
    async getFileInformationRaw(requestParameters: GetFileInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileInformation>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling getFileInformation.');
        }

        if (requestParameters.fileId === null || requestParameters.fileId === undefined) {
            throw new runtime.RequiredError('fileId','Required parameter requestParameters.fileId was null or undefined when calling getFileInformation.');
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
            path: `/mongodb/buckets/{bucketName}/files/{fileId}`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))).replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters.fileId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileInformationFromJSON(jsonValue));
    }

    /**
     * Get one FileInformation from given Bucket
     * FileInformation from Bucket
     */
    async getFileInformation(requestParameters: GetFileInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileInformation> {
        const response = await this.getFileInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert one File in given Bucket
     * Insert File
     */
    async insertFileRaw(requestParameters: InsertFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsertResponse>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling insertFile.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling insertFile.');
        }

        if (requestParameters.metaData === null || requestParameters.metaData === undefined) {
            throw new runtime.RequiredError('metaData','Required parameter requestParameters.metaData was null or undefined when calling insertFile.');
        }

        const queryParameters: any = {};

        if (requestParameters.fileName !== undefined) {
            queryParameters['fileName'] = requestParameters.fileName;
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

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        if (requestParameters.metaData !== undefined) {
            formParams.append('metaData', requestParameters.metaData as any);
        }

        const response = await this.request({
            path: `/mongodb/buckets/{bucketName}/files`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsertResponseFromJSON(jsonValue));
    }

    /**
     * Insert one File in given Bucket
     * Insert File
     */
    async insertFile(requestParameters: InsertFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsertResponse> {
        const response = await this.insertFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Files paginated from given Bucket
     * Files in Bucket
     */
    async listFilesRaw(requestParameters: ListFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FileInformation>>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling listFiles.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.projection !== undefined) {
            queryParameters['projection'] = requestParameters.projection;
        }

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
            path: `/mongodb/buckets/{bucketName}/files`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FileInformationFromJSON));
    }

    /**
     * Get Files paginated from given Bucket
     * Files in Bucket
     */
    async listFiles(requestParameters: ListFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FileInformation>> {
        const response = await this.listFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Replace MetaData and potential update FileName
     * Update FileInformation in Bucket
     */
    async updateFileInformationRaw(requestParameters: UpdateFileInformationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateResponse>> {
        if (requestParameters.bucketName === null || requestParameters.bucketName === undefined) {
            throw new runtime.RequiredError('bucketName','Required parameter requestParameters.bucketName was null or undefined when calling updateFileInformation.');
        }

        if (requestParameters.fileId === null || requestParameters.fileId === undefined) {
            throw new runtime.RequiredError('fileId','Required parameter requestParameters.fileId was null or undefined when calling updateFileInformation.');
        }

        if (requestParameters.updateFileInformationRequest === null || requestParameters.updateFileInformationRequest === undefined) {
            throw new runtime.RequiredError('updateFileInformationRequest','Required parameter requestParameters.updateFileInformationRequest was null or undefined when calling updateFileInformation.');
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
            headerParameters["X-AUTH-APIKEY"] = this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/buckets/{bucketName}/files/{fileId}`.replace(`{${"bucketName"}}`, encodeURIComponent(String(requestParameters.bucketName))).replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters.fileId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFileInformationRequestToJSON(requestParameters.updateFileInformationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateResponseFromJSON(jsonValue));
    }

    /**
     * Replace MetaData and potential update FileName
     * Update FileInformation in Bucket
     */
    async updateFileInformation(requestParameters: UpdateFileInformationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateResponse> {
        const response = await this.updateFileInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
