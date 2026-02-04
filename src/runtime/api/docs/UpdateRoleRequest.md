
# UpdateRoleRequest


## Properties

Name | Type
------------ | -------------
`isAdmin` | boolean
`collectionGrants` | [Array&lt;Grant&gt;](Grant.md)

## Example

```typescript
import type { UpdateRoleRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "isAdmin": null,
  "collectionGrants": null,
} satisfies UpdateRoleRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateRoleRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


