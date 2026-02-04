# JobsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteJob**](JobsApi.md#deletejob) | **DELETE** /system/jobs/{jobGroup}/{jobName} | Delete Job |
| [**executeJob**](JobsApi.md#executejob) | **POST** /system/jobs/{jobGroup}/{jobName} | Execute Job |
| [**jobsList**](JobsApi.md#jobslist) | **GET** /system/jobs | Registered Jobs |
| [**possibleJobsList**](JobsApi.md#possiblejobslist) | **GET** /system/jobs/classes | Possible Jobs |
| [**registerJob**](JobsApi.md#registerjob) | **PUT** /system/jobs | Register Job |
| [**updateJob**](JobsApi.md#updatejob) | **PATCH** /system/jobs/{jobGroup}/{jobName} | Update Job |



## deleteJob

> JsonValueBoolean deleteJob(jobGroup, jobName)

Delete Job

Delete Job and reload all Job Information

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '';
import type { DeleteJobRequest } from '';

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
  const api = new JobsApi(config);

  const body = {
    // string | Group Name of the Job
    jobGroup: jobGroup_example,
    // string | Name of the Job
    jobName: jobName_example,
  } satisfies DeleteJobRequest;

  try {
    const data = await api.deleteJob(body);
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
| **jobGroup** | `string` | Group Name of the Job | [Defaults to `&#39;Default&#39;`] |
| **jobName** | `string` | Name of the Job | [Defaults to `undefined`] |

### Return type

[**JsonValueBoolean**](JsonValueBoolean.md)

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


## executeJob

> JsonValueBoolean executeJob(jobGroup, jobName)

Execute Job

Execute scheduled Job manually

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '';
import type { ExecuteJobRequest } from '';

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
  const api = new JobsApi(config);

  const body = {
    // string | Group Name of the Job
    jobGroup: jobGroup_example,
    // string | Name of the Job
    jobName: jobName_example,
  } satisfies ExecuteJobRequest;

  try {
    const data = await api.executeJob(body);
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
| **jobGroup** | `string` | Group Name of the Job | [Defaults to `&#39;Default&#39;`] |
| **jobName** | `string` | Name of the Job | [Defaults to `undefined`] |

### Return type

[**JsonValueBoolean**](JsonValueBoolean.md)

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


## jobsList

> Array&lt;JobInformation&gt; jobsList()

Registered Jobs

Returns the List of all registered Jobs with full information

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '';
import type { JobsListRequest } from '';

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
  const api = new JobsApi(config);

  try {
    const data = await api.jobsList();
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

[**Array&lt;JobInformation&gt;**](JobInformation.md)

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


## possibleJobsList

> Array&lt;string&gt; possibleJobsList()

Possible Jobs

Returns the List of possible job classes

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '';
import type { PossibleJobsListRequest } from '';

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
  const api = new JobsApi(config);

  try {
    const data = await api.possibleJobsList();
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

**Array<string>**

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


## registerJob

> JobInformation registerJob(jobConfig)

Register Job

Register an Job and return the JobInformation with next schedule information

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '';
import type { RegisterJobRequest } from '';

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
  const api = new JobsApi(config);

  const body = {
    // JobConfig
    jobConfig: ...,
  } satisfies RegisterJobRequest;

  try {
    const data = await api.registerJob(body);
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
| **jobConfig** | [JobConfig](JobConfig.md) |  | |

### Return type

[**JobInformation**](JobInformation.md)

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


## updateJob

> JobInformation updateJob(jobGroup, jobName, jobConfig)

Update Job

Add Job and get JobInformation back

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '';
import type { UpdateJobRequest } from '';

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
  const api = new JobsApi(config);

  const body = {
    // string | Group Name of the Job
    jobGroup: jobGroup_example,
    // string | Name of the Job
    jobName: jobName_example,
    // JobConfig
    jobConfig: ...,
  } satisfies UpdateJobRequest;

  try {
    const data = await api.updateJob(body);
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
| **jobGroup** | `string` | Group Name of the Job | [Defaults to `&#39;Default&#39;`] |
| **jobName** | `string` | Name of the Job | [Defaults to `undefined`] |
| **jobConfig** | [JobConfig](JobConfig.md) |  | |

### Return type

[**JobInformation**](JobInformation.md)

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

