
# SchemaAnalysisField


## Properties

Name | Type
------------ | -------------
`name` | string
`fullName` | string
`fieldTypes` | [Array&lt;SchemaAnalysisFieldType&gt;](SchemaAnalysisFieldType.md)
`count` | number
`percentageOfParent` | number
`subFields` | [Array&lt;SchemaAnalysisField&gt;](SchemaAnalysisField.md)

## Example

```typescript
import type { SchemaAnalysisField } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "fullName": null,
  "fieldTypes": null,
  "count": null,
  "percentageOfParent": null,
  "subFields": null,
} satisfies SchemaAnalysisField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchemaAnalysisField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


