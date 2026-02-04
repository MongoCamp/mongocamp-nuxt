# InformationApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**version**](InformationApi.md#version) | **GET** /version | Version Information |



## version

> Version version()

Version Information

Version Info of the MongoCamp API

### Example

```ts
import {
  Configuration,
  InformationApi,
} from '';
import type { VersionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new InformationApi();

  try {
    const data = await api.version();
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

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

