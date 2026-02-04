
# UpdateResponse


## Properties

Name | Type
------------ | -------------
`wasAcknowledged` | boolean
`upsertedIds` | Array&lt;string&gt;
`modifiedCount` | number
`matchedCount` | number

## Example

```typescript
import type { UpdateResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "wasAcknowledged": null,
  "upsertedIds": null,
  "modifiedCount": null,
  "matchedCount": null,
} satisfies UpdateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


