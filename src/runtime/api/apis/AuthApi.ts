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
    JsonValueBoolean,
    JsonValueBooleanFromJSON,
    JsonValueBooleanToJSON,
    JsonValueString,
    JsonValueStringFromJSON,
    JsonValueStringToJSON,
    Login,
    LoginFromJSON,
    LoginToJSON,
    LoginResult,
    LoginResultFromJSON,
    LoginResultToJSON,
    PasswordUpdateRequest,
    PasswordUpdateRequestFromJSON,
    PasswordUpdateRequestToJSON,
    UserProfile,
    UserProfileFromJSON,
    UserProfileToJSON,
} from '../models';

export interface LoginRequest {
    login: Login;
}

export interface UpdatePasswordRequest {
    passwordUpdateRequest: PasswordUpdateRequest;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Generate new ApiKey of logged in User
     * Update ApiKey
     */
    async generateNewApiKeyRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<JsonValueString>> {
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
            path: `/auth/profile/apikey`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueStringFromJSON(jsonValue));
    }

    /**
     * Generate new ApiKey of logged in User
     * Update ApiKey
     */
    async generateNewApiKey(initOverrides?: RequestInit): Promise<JsonValueString> {
        const response = await this.generateNewApiKeyRaw(initOverrides);
        return await response.value();
    }

    /**
     * Check a given Login for is authenticated
     * Check Authentication
     */
    async isAuthenticatedRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<JsonValueBoolean>> {
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
            path: `/auth/authenticated`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Check a given Login for is authenticated
     * Check Authentication
     */
    async isAuthenticated(initOverrides?: RequestInit): Promise<JsonValueBoolean> {
        const response = await this.isAuthenticatedRaw(initOverrides);
        return await response.value();
    }

    /**
     * Login for one user and return Login Information
     * Login User
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LoginResult>> {
        if (requestParameters.login === null || requestParameters.login === undefined) {
            throw new runtime.RequiredError('login','Required parameter requestParameters.login was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginToJSON(requestParameters.login),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResultFromJSON(jsonValue));
    }

    /**
     * Login for one user and return Login Information
     * Login User
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<LoginResult> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logout by bearer Token
     * Logout User
     */
    async logoutRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<JsonValueBoolean>> {
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
            path: `/auth/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Logout by bearer Token
     * Logout User
     */
    async logout(initOverrides?: RequestInit): Promise<JsonValueBoolean> {
        const response = await this.logoutRaw(initOverrides);
        return await response.value();
    }

    /**
     * Logout by bearer Token
     * Logout User
     */
    async logoutByDeleteRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<JsonValueBoolean>> {
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
            path: `/auth/logout`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Logout by bearer Token
     * Logout User
     */
    async logoutByDelete(initOverrides?: RequestInit): Promise<JsonValueBoolean> {
        const response = await this.logoutByDeleteRaw(initOverrides);
        return await response.value();
    }

    /**
     * Refresh Token and return Login Information
     * Refresh User
     */
    async refreshTokenRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<LoginResult>> {
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
            path: `/auth/token/refresh`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResultFromJSON(jsonValue));
    }

    /**
     * Refresh Token and return Login Information
     * Refresh User
     */
    async refreshToken(initOverrides?: RequestInit): Promise<LoginResult> {
        const response = await this.refreshTokenRaw(initOverrides);
        return await response.value();
    }

    /**
     * Change Password of logged in User
     * Update Password
     */
    async updatePasswordRaw(requestParameters: UpdatePasswordRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JsonValueBoolean>> {
        if (requestParameters.passwordUpdateRequest === null || requestParameters.passwordUpdateRequest === undefined) {
            throw new runtime.RequiredError('passwordUpdateRequest','Required parameter requestParameters.passwordUpdateRequest was null or undefined when calling updatePassword.');
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
            path: `/auth/profile/password`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordUpdateRequestToJSON(requestParameters.passwordUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JsonValueBooleanFromJSON(jsonValue));
    }

    /**
     * Change Password of logged in User
     * Update Password
     */
    async updatePassword(requestParameters: UpdatePasswordRequest, initOverrides?: RequestInit): Promise<JsonValueBoolean> {
        const response = await this.updatePasswordRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return the User Profile of loggedin user
     * User Profile
     */
    async userProfileRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<UserProfile>> {
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
            path: `/auth/profile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * Return the User Profile of loggedin user
     * User Profile
     */
    async userProfile(initOverrides?: RequestInit): Promise<UserProfile> {
        const response = await this.userProfileRaw(initOverrides);
        return await response.value();
    }

}
