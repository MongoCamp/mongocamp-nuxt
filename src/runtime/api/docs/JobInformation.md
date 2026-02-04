
# JobInformation


## Properties

Name | Type
------------ | -------------
`name` | string
`group` | string
`jobClassName` | string
`description` | string
`cronExpression` | string
`priority` | number
`lastScheduledFireTime` | Date
`nextScheduledFireTime` | Date
`scheduleInformation` | string

## Example

```typescript
import type { JobInformation } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "group": null,
  "jobClassName": null,
  "description": null,
  "cronExpression": null,
  "priority": null,
  "lastScheduledFireTime": null,
  "nextScheduledFireTime": null,
  "scheduleInformation": null,
} satisfies JobInformation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobInformation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


