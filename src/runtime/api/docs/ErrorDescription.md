
# ErrorDescription


## Properties

Name | Type
------------ | -------------
`code` | number
`msg` | string
`additionalInfo` | string

## Example

```typescript
import type { ErrorDescription } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "msg": null,
  "additionalInfo": null,
} satisfies ErrorDescription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorDescription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


