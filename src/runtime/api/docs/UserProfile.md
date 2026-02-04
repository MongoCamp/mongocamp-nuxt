
# UserProfile


## Properties

Name | Type
------------ | -------------
`user` | string
`isAdmin` | boolean
`apiKey` | string
`roles` | Array&lt;string&gt;
`grants` | [Array&lt;Grant&gt;](Grant.md)

## Example

```typescript
import type { UserProfile } from ''

// TODO: Update the object below with actual values
const example = {
  "user": null,
  "isAdmin": null,
  "apiKey": null,
  "roles": null,
  "grants": null,
} satisfies UserProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


