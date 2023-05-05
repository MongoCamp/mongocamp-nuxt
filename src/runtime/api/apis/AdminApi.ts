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
  ErrorDescription,
  JsonValueBoolean,
  JsonValueString,
  PasswordUpdateRequest,
  Role,
  UpdateRoleRequest,
  UserInformation,
  UserProfile,
} from '../models';
import {
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    JsonValueBooleanFromJSON,
    JsonValueBooleanToJSON,
    JsonValueStringFromJSON,
    JsonValueStringToJSON,
    PasswordUpdateRequestFromJSON,
    PasswordUpdateRequestToJSON,
    RoleFromJSON,
    RoleToJSON,
    UpdateRoleRequestFromJSON,
    UpdateRoleRequestToJSON,
    UserInformationFromJSON,
    UserInformationToJSON,
    UserProfileFromJSON,
    UserProfileToJSON,
} from '../models';

export interface AddRoleRequest {
    role: Role;
}

export interface AddUserRequest {
    userInformation: UserInformation;
}

export interface DeleteRoleRequest {
    roleName: string;
}

export interface DeleteUserRequest {
    userId: string;
}

export interface GetRoleRequest {
    roleName: string;
}

export interface GetUserRequest {
    userId: string;
}

export interface GnerateNewApiKeyForUserRequest {
    userId: string;
}

export interface ListRolesRequest {
    filter?: string;
    rowsPerPage?: number;
    page?: number;
}

export interface ListUsersRequest {
    filter?: string;
    rowsPerPage?: number;
    page?: number;
}

export interface UpdatePasswordForUserRequest {
    userId: string;
    passwordUpdateRequest: PasswordUpdateRequest;
}

export interface UpdateRoleOperationRequest {
    roleName: string;
    updateRoleRequest: UpdateRoleRequest;
}

export interface UpdateRolesForUserRequest {
    userId: string;
    requestBody?: Array<string>;
}

/**
 * 
 */
export class AdminApi extends runtime.BaseAPI {

    /**
     * Add a new Role
     * Add Role
     */
    async addRoleRaw(requestParameters: AddRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Role>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling addRole.');
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
            path: `/admin/roles`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RoleToJSON(requestParameters.role),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleFromJSON(jsonValue));
    }

    /**
     * Add a new Role
     * Add Role
     */
    async addRole(requestParameters: AddRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Role> {
        const response = await this.addRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add a new User
     * Add User
     */
    async addUserRaw(requestParameters: AddUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        if (requestParameters.userInformation === null || requestParameters.userInformation === undefined) {
            throw new runtime.RequiredError('userInformation','Required parameter requestParameters.userInformation was null or undefined when calling addUser.');
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
            path: `/admin/users`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserInformationToJSON(requestParameters.userInformation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * Add a new User
     * Add User
     */
    async addUser(requestParameters: AddUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.addUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Role
     * Delete Role
     */
    async deleteRoleRaw(requestParameters: DeleteRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.roleName === null || requestParameters.roleName === undefined) {
            throw new runtime.RequiredError('roleName','Required parameter requestParameters.roleName was null or undefined when calling deleteRole.');
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
            path: `/admin/roles/{roleName}`.replace(`{${"roleName"}}`, encodeURIComponent(String(requestParameters.roleName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete Role
     * Delete Role
     */
    async deleteRole(requestParameters: DeleteRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.deleteRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete User
     * Delete User
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteUser.');
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
            path: `/admin/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Delete User
     * Delete User
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.deleteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Role by RoleKey
     * Get Role
     */
    async getRoleRaw(requestParameters: GetRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Role>> {
        if (requestParameters.roleName === null || requestParameters.roleName === undefined) {
            throw new runtime.RequiredError('roleName','Required parameter requestParameters.roleName was null or undefined when calling getRole.');
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
            path: `/admin/roles/{roleName}`.replace(`{${"roleName"}}`, encodeURIComponent(String(requestParameters.roleName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleFromJSON(jsonValue));
    }

    /**
     * Get Role by RoleKey
     * Get Role
     */
    async getRole(requestParameters: GetRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Role> {
        const response = await this.getRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get UserProfile for user
     * UserProfile for userId
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUser.');
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
            path: `/admin/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * Get UserProfile for user
     * UserProfile for userId
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate an new APIkey for the user
     * Update ApiKey
     */
    async gnerateNewApiKeyForUserRaw(requestParameters: GnerateNewApiKeyForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueString>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling gnerateNewApiKeyForUser.');
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
            path: `/admin/users/{userId}/apikey`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueStringFromJSON(jsonValue));
    }

    /**
     * Generate an new APIkey for the user
     * Update ApiKey
     */
    async gnerateNewApiKeyForUser(requestParameters: GnerateNewApiKeyForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueString> {
        const response = await this.gnerateNewApiKeyForUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all Roles or filtered
     * List Roles
     */
    async listRolesRaw(requestParameters: ListRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Role>>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
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
            path: `/admin/roles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RoleFromJSON));
    }

    /**
     * List all Roles or filtered
     * List Roles
     */
    async listRoles(requestParameters: ListRolesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Role>> {
        const response = await this.listRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all Users or filtered
     * List Users
     */
    async listUsersRaw(requestParameters: ListUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserProfile>>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
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
            path: `/admin/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserProfileFromJSON));
    }

    /**
     * List all Users or filtered
     * List Users
     */
    async listUsers(requestParameters: ListUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserProfile>> {
        const response = await this.listUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change Password of User
     * Update Password
     */
    async updatePasswordForUserRaw(requestParameters: UpdatePasswordForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updatePasswordForUser.');
        }

        if (requestParameters.passwordUpdateRequest === null || requestParameters.passwordUpdateRequest === undefined) {
            throw new runtime.RequiredError('passwordUpdateRequest','Required parameter requestParameters.passwordUpdateRequest was null or undefined when calling updatePasswordForUser.');
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
            path: `/admin/users/{userId}/password`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordUpdateRequestToJSON(requestParameters.passwordUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Change Password of User
     * Update Password
     */
    async updatePasswordForUser(requestParameters: UpdatePasswordForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JsonValueBoolean> {
        const response = await this.updatePasswordForUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Role
     * Update Role
     */
    async updateRoleRaw(requestParameters: UpdateRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Role>> {
        if (requestParameters.roleName === null || requestParameters.roleName === undefined) {
            throw new runtime.RequiredError('roleName','Required parameter requestParameters.roleName was null or undefined when calling updateRole.');
        }

        if (requestParameters.updateRoleRequest === null || requestParameters.updateRoleRequest === undefined) {
            throw new runtime.RequiredError('updateRoleRequest','Required parameter requestParameters.updateRoleRequest was null or undefined when calling updateRole.');
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
            path: `/admin/roles/{roleName}`.replace(`{${"roleName"}}`, encodeURIComponent(String(requestParameters.roleName))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRoleRequestToJSON(requestParameters.updateRoleRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleFromJSON(jsonValue));
    }

    /**
     * Update Role
     * Update Role
     */
    async updateRole(requestParameters: UpdateRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Role> {
        const response = await this.updateRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Roles of User
     * Update User Roles
     */
    async updateRolesForUserRaw(requestParameters: UpdateRolesForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateRolesForUser.');
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
            path: `/admin/users/{userId}/roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * Update Roles of User
     * Update User Roles
     */
    async updateRolesForUser(requestParameters: UpdateRolesForUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.updateRolesForUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
