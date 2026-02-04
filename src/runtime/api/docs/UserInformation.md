
# UserInformation


## Properties

Name | Type
------------ | -------------
`userId` | string
`password` | string
`apiKey` | string
`roles` | Array&lt;string&gt;

## Example

```typescript
import type { UserInformation } from ''

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "password": null,
  "apiKey": null,
  "roles": null,
} satisfies UserInformation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserInformation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


