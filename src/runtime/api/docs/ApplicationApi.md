# ApplicationApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConfig**](ApplicationApi.md#getconfig) | **GET** /system/configurations/{configurationKey} | Configuration for configurationKey |
| [**listConfigurations**](ApplicationApi.md#listconfigurations) | **GET** /system/configurations | List Configurations |
| [**settings**](ApplicationApi.md#settings) | **GET** /system/settings | System Settings |
| [**shutdown**](ApplicationApi.md#shutdown) | **DELETE** /system | Shutdown MongoCamp |
| [**updateConfiguration**](ApplicationApi.md#updateconfiguration) | **PATCH** /system/configurations/{configurationKey} | Update Configuration |



## getConfig

> MongoCampConfiguration getConfig(configurationKey)

Configuration for configurationKey

Get Configuration for key

### Example

```ts
import {
  Configuration,
  ApplicationApi,
} from '';
import type { GetConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApplicationApi(config);

  const body = {
    // string | configurationKey to get
    configurationKey: configurationKey_example,
  } satisfies GetConfigRequest;

  try {
    const data = await api.getConfig(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationKey** | `string` | configurationKey to get | [Defaults to `undefined`] |

### Return type

[**MongoCampConfiguration**](MongoCampConfiguration.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConfigurations

> Array&lt;MongoCampConfiguration&gt; listConfigurations()

List Configurations

List all Configurations or filtered

### Example

```ts
import {
  Configuration,
  ApplicationApi,
} from '';
import type { ListConfigurationsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApplicationApi(config);

  try {
    const data = await api.listConfigurations();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;MongoCampConfiguration&gt;**](MongoCampConfiguration.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## settings

> SettingsResponse settings()

System Settings

Returns the Settings of the running MongoCamp Application.

### Example

```ts
import {
  Configuration,
  ApplicationApi,
} from '';
import type { SettingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApplicationApi(config);

  try {
    const data = await api.settings();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SettingsResponse**](SettingsResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## shutdown

> JsonValueBoolean shutdown(force)

Shutdown MongoCamp

Shutdown the running MongoCamp Application. CLI Mode will automatically restart the Application.

### Example

```ts
import {
  Configuration,
  ApplicationApi,
} from '';
import type { ShutdownRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApplicationApi(config);

  const body = {
    // boolean | Shutdown Server and don`t send reboot event. (optional)
    force: true,
  } satisfies ShutdownRequest;

  try {
    const data = await api.shutdown(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **force** | `boolean` | Shutdown Server and don&#x60;t send reboot event. | [Optional] [Defaults to `false`] |

### Return type

[**JsonValueBoolean**](JsonValueBoolean.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter force |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConfiguration

> JsonValueBoolean updateConfiguration(configurationKey, jsonValueAny)

Update Configuration

Update Configuration with the value

### Example

```ts
import {
  Configuration,
  ApplicationApi,
} from '';
import type { UpdateConfigurationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApplicationApi(config);

  const body = {
    // string | configurationKey to edit
    configurationKey: configurationKey_example,
    // JsonValueAny
    jsonValueAny: ...,
  } satisfies UpdateConfigurationRequest;

  try {
    const data = await api.updateConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationKey** | `string` | configurationKey to edit | [Defaults to `undefined`] |
| **jsonValueAny** | [JsonValueAny](JsonValueAny.md) |  | |

### Return type

[**JsonValueBoolean**](JsonValueBoolean.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: body |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

