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
  DeleteResponse,
  ErrorDescription,
  InsertResponse,
  MongoFindRequest,
  UpdateRequest,
  UpdateResponse,
} from '../models/index';
import {
    DeleteResponseFromJSON,
    DeleteResponseToJSON,
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    InsertResponseFromJSON,
    InsertResponseToJSON,
    MongoFindRequestFromJSON,
    MongoFindRequestToJSON,
    UpdateRequestFromJSON,
    UpdateRequestToJSON,
    UpdateResponseFromJSON,
    UpdateResponseToJSON,
} from '../models/index';

export interface DeleteRequest {
    collectionName: string;
    documentId: string;
}

export interface DeleteManyRequest {
    collectionName: string;
    requestBody: { [key: string]: string; };
}

export interface FindRequest {
    collectionName: string;
    mongoFindRequest: MongoFindRequest;
    rowsPerPage?: number;
    page?: number;
}

export interface GetDocumentRequest {
    collectionName: string;
    documentId: string;
}

export interface InsertRequest {
    collectionName: string;
    requestBody: { [key: string]: string; };
}

export interface InsertManyRequest {
    collectionName: string;
    requestBody?: Array<{ [key: string]: string; }>;
}

export interface ListDocumentsRequest {
    collectionName: string;
    filter?: string;
    sort?: Array<string>;
    projection?: Array<string>;
    rowsPerPage?: number;
    page?: number;
}

export interface UpdateRequest {
    collectionName: string;
    documentId: string;
    requestBody: { [key: string]: string; };
}

export interface UpdateDocumentPartialRequest {
    collectionName: string;
    documentId: string;
    requestBody: { [key: string]: string; };
}

export interface UpdateManyRequest {
    collectionName: string;
    updateRequest: UpdateRequest;
}

/**
 * 
 */
export class DocumentApi extends runtime.BaseAPI {

    /**
     * Delete one Document from given Collection
     * Delete Document from Collection
     */
    async _deleteRaw(requestParameters: DeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteResponse>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling _delete().'
            );
        }

        if (requestParameters['documentId'] == null) {
            throw new runtime.RequiredError(
                'documentId',
                'Required parameter "documentId" was null or undefined when calling _delete().'
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
            path: `/mongodb/collections/{collectionName}/documents/{documentId}`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))).replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters['documentId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteResponseFromJSON(jsonValue));
    }

    /**
     * Delete one Document from given Collection
     * Delete Document from Collection
     */
    async _delete(requestParameters: DeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteResponse> {
        const response = await this._deleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete many Document in given Collection
     * Delete Many in Collection
     */
    async deleteManyRaw(requestParameters: DeleteManyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteResponse>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling deleteMany().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling deleteMany().'
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
            path: `/mongodb/collections/{collectionName}/documents/many/delete`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteResponseFromJSON(jsonValue));
    }

    /**
     * Delete many Document in given Collection
     * Delete Many in Collection
     */
    async deleteMany(requestParameters: DeleteManyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteResponse> {
        const response = await this.deleteManyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Alternative to GET Route for more complex queries and URL max. Length
     * Documents in Collection
     */
    async findRaw(requestParameters: FindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<{ [key: string]: string; }>>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling find().'
            );
        }

        if (requestParameters['mongoFindRequest'] == null) {
            throw new runtime.RequiredError(
                'mongoFindRequest',
                'Required parameter "mongoFindRequest" was null or undefined when calling find().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['rowsPerPage'] != null) {
            queryParameters['rowsPerPage'] = requestParameters['rowsPerPage'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            headerParameters["X-AUTH-APIKEY"] = await this.configuration.apiKey("X-AUTH-APIKEY"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mongodb/collections/{collectionName}/documents`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MongoFindRequestToJSON(requestParameters['mongoFindRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Alternative to GET Route for more complex queries and URL max. Length
     * Documents in Collection
     */
    async find(requestParameters: FindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<{ [key: string]: string; }>> {
        const response = await this.findRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get one Document from given Collection
     * Document from Collection
     */
    async getDocumentRaw(requestParameters: GetDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling getDocument().'
            );
        }

        if (requestParameters['documentId'] == null) {
            throw new runtime.RequiredError(
                'documentId',
                'Required parameter "documentId" was null or undefined when calling getDocument().'
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
            path: `/mongodb/collections/{collectionName}/documents/{documentId}`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))).replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters['documentId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get one Document from given Collection
     * Document from Collection
     */
    async getDocument(requestParameters: GetDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.getDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert one Document in given Collection
     * Insert Document
     */
    async insertRaw(requestParameters: InsertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsertResponse>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling insert().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling insert().'
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
            path: `/mongodb/collections/{collectionName}/documents`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsertResponseFromJSON(jsonValue));
    }

    /**
     * Insert one Document in given Collection
     * Insert Document
     */
    async insert(requestParameters: InsertRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsertResponse> {
        const response = await this.insertRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert many documents in given Collection
     * Insert many Documents
     */
    async insertManyRaw(requestParameters: InsertManyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InsertResponse>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling insertMany().'
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
            path: `/mongodb/collections/{collectionName}/documents/many/insert`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InsertResponseFromJSON(jsonValue));
    }

    /**
     * Insert many documents in given Collection
     * Insert many Documents
     */
    async insertMany(requestParameters: InsertManyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InsertResponse> {
        const response = await this.insertManyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Documents paginated from given Collection
     * Documents in Collection
     */
    async listDocumentsRaw(requestParameters: ListDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<{ [key: string]: string; }>>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling listDocuments().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['projection'] != null) {
            queryParameters['projection'] = requestParameters['projection'];
        }

        if (requestParameters['rowsPerPage'] != null) {
            queryParameters['rowsPerPage'] = requestParameters['rowsPerPage'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            path: `/mongodb/collections/{collectionName}/documents`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get Documents paginated from given Collection
     * Documents in Collection
     */
    async listDocuments(requestParameters: ListDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<{ [key: string]: string; }>> {
        const response = await this.listDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * \'Replace\' one Document with the new document from Request in Collection
     * Update Document in Collection
     */
    async updateRaw(requestParameters: UpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateResponse>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling update().'
            );
        }

        if (requestParameters['documentId'] == null) {
            throw new runtime.RequiredError(
                'documentId',
                'Required parameter "documentId" was null or undefined when calling update().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling update().'
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
            path: `/mongodb/collections/{collectionName}/documents/{documentId}`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))).replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters['documentId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateResponseFromJSON(jsonValue));
    }

    /**
     * \'Replace\' one Document with the new document from Request in Collection
     * Update Document in Collection
     */
    async update(requestParameters: UpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateResponse> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the document Parts with the values from the Request
     * Update Document Parts in Collection
     */
    async updateDocumentPartialRaw(requestParameters: UpdateDocumentPartialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateResponse>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling updateDocumentPartial().'
            );
        }

        if (requestParameters['documentId'] == null) {
            throw new runtime.RequiredError(
                'documentId',
                'Required parameter "documentId" was null or undefined when calling updateDocumentPartial().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling updateDocumentPartial().'
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
            path: `/mongodb/collections/{collectionName}/documents/{documentId}/partial`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))).replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters['documentId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateResponseFromJSON(jsonValue));
    }

    /**
     * Update the document Parts with the values from the Request
     * Update Document Parts in Collection
     */
    async updateDocumentPartial(requestParameters: UpdateDocumentPartialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateResponse> {
        const response = await this.updateDocumentPartialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update many Document in given Collection
     * Update many in Collection
     */
    async updateManyRaw(requestParameters: UpdateManyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateResponse>> {
        if (requestParameters['collectionName'] == null) {
            throw new runtime.RequiredError(
                'collectionName',
                'Required parameter "collectionName" was null or undefined when calling updateMany().'
            );
        }

        if (requestParameters['updateRequest'] == null) {
            throw new runtime.RequiredError(
                'updateRequest',
                'Required parameter "updateRequest" was null or undefined when calling updateMany().'
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
            path: `/mongodb/collections/{collectionName}/documents/many/update`.replace(`{${"collectionName"}}`, encodeURIComponent(String(requestParameters['collectionName']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRequestToJSON(requestParameters['updateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateResponseFromJSON(jsonValue));
    }

    /**
     * Update many Document in given Collection
     * Update many in Collection
     */
    async updateMany(requestParameters: UpdateManyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateResponse> {
        const response = await this.updateManyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
