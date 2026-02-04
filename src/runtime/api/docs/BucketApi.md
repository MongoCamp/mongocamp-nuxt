# BucketApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clearBucket**](BucketApi.md#clearbucket) | **DELETE** /mongodb/buckets/{bucketName}/clear | Clear Bucket |
| [**deleteBucket**](BucketApi.md#deletebucket) | **DELETE** /mongodb/buckets/{bucketName} | Delete Bucket |
| [**getBucket**](BucketApi.md#getbucket) | **GET** /mongodb/buckets/{bucketName} | Bucket Information |
| [**listBuckets**](BucketApi.md#listbuckets) | **GET** /mongodb/buckets | List of Buckets |



## clearBucket

> JsonValueBoolean clearBucket(bucketName)

Clear Bucket

Delete all Files in Bucket

### Example

```ts
import {
  Configuration,
  BucketApi,
} from '';
import type { ClearBucketRequest } from '';

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
  const api = new BucketApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
  } satisfies ClearBucketRequest;

  try {
    const data = await api.clearBucket(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |

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


## deleteBucket

> JsonValueBoolean deleteBucket(bucketName)

Delete Bucket

Delete a given Bucket

### Example

```ts
import {
  Configuration,
  BucketApi,
} from '';
import type { DeleteBucketRequest } from '';

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
  const api = new BucketApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
  } satisfies DeleteBucketRequest;

  try {
    const data = await api.deleteBucket(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |

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


## getBucket

> BucketInformation getBucket(bucketName)

Bucket Information

All Information about a single Bucket

### Example

```ts
import {
  Configuration,
  BucketApi,
} from '';
import type { GetBucketRequest } from '';

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
  const api = new BucketApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
  } satisfies GetBucketRequest;

  try {
    const data = await api.getBucket(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |

### Return type

[**BucketInformation**](BucketInformation.md)

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


## listBuckets

> Array&lt;string&gt; listBuckets()

List of Buckets

List of all Buckets of the default database

### Example

```ts
import {
  Configuration,
  BucketApi,
} from '';
import type { ListBucketsRequest } from '';

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
  const api = new BucketApi(config);

  try {
    const data = await api.listBuckets();
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

