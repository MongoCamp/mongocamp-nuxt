
# MongoAggregateRequest


## Properties

Name | Type
------------ | -------------
`pipeline` | [Array&lt;PipelineStage&gt;](PipelineStage.md)
`allowDiskUse` | boolean

## Example

```typescript
import type { MongoAggregateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "pipeline": null,
  "allowDiskUse": null,
} satisfies MongoAggregateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MongoAggregateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


