
# SchemaAnalysis


## Properties

Name | Type
------------ | -------------
`count` | number
`sample` | number
`percentageOfAnalysed` | number
`fields` | [Array&lt;SchemaAnalysisField&gt;](SchemaAnalysisField.md)

## Example

```typescript
import type { SchemaAnalysis } from ''

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "sample": null,
  "percentageOfAnalysed": null,
  "fields": null,
} satisfies SchemaAnalysis

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchemaAnalysis
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


