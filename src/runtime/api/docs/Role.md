
# Role


## Properties

Name | Type
------------ | -------------
`name` | string
`isAdmin` | boolean
`collectionGrants` | [Array&lt;Grant&gt;](Grant.md)

## Example

```typescript
import type { Role } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "isAdmin": null,
  "collectionGrants": null,
} satisfies Role

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Role
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


