# task-context-example

Per Abhit's request.

### GET /api/task

Returns all tasks

### GET /api/task/:taskID

Returns the task with the requested id with _the following structure for context_:

```js
{
"id": 1,
"description": "File Income Taxes",
"notes": "Deadline: November 1st",
"completed": 0,
"context": [
	     {
		"id": 3,
		"context_description": "At Computer"
	     }
	]
}
```

The same method that was used to create this structure (using `Promise.all()`) can also be applied to retrieving a project by its id.

### GET /api/tasks/context

Returns all contexts

### GET /api/tasks/context/:contextID

Returns a list of tasks sorted by their context id. This is helpful when you want to get tasks specifically by their context, e.g. "At Home", "At Work", etc.
