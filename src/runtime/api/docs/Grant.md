
# Grant


## Properties

Name | Type
------------ | -------------
`name` | string
`read` | boolean
`write` | boolean
`administrate` | boolean
`grantType` | string

## Example

```typescript
import type { Grant } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "read": null,
  "write": null,
  "administrate": null,
  "grantType": null,
} satisfies Grant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Grant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


