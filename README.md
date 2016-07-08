# What is this?

This is a very simple set of functions that allows you to write simple queries against json payloads.
You can install it via npm.

`npm install jpath-query`

# What does it do, exactly?

Let's say you have a json payload from a web service that looks like
this:

```
{ items: [ { name: 'hello', kind: 'message' },
           { name: 'world', size: 20 },
           { kind: 'notice', date: '2008-12-20T13:00:00.132Z' } ],
  messages: { 'error': [ ],
              'quota': '5 remaining calls' } }
```

If you want to get the items, you'd have to write a nested if/else
loop to make sure the key existed and that it had data an everything
else.

For example, if you assigned that json to var `data`,  and you wanted
to get the kind of the 3rd dictionary in the `items` keys you might do
somthing like this:

```
if (data.items && data.items.length >= 2) {
  if (data.items[2]) {
     return data.items[2].kind;
  }
}
```

Or you could use `jpath-query`.  Which turns that
nested if into this:

```
var query = require('jpath-query');
console.log(query.jpath('/items/2/kind',data));
```

You can even specify a default return value if the
query you send doesn't find anything.

```
var default = 'I found nothing';
console.log(query.jpath('/items/2/kind/missing',data,default));
```

		    
