
# JobConfig


## Properties

Name | Type
------------ | -------------
`name` | string
`className` | string
`description` | string
`cronExpression` | string
`group` | string
`priority` | number

## Example

```typescript
import type { JobConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "className": null,
  "description": null,
  "cronExpression": null,
  "group": null,
  "priority": null,
} satisfies JobConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


