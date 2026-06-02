Api= Application Programing Interface

REST CORS SOP

/\*
What is an API?

---

An API (Application Programming Interface) is a set of rules and definitions that allows one software application to communicate with another. In web development, APIs enable your frontend (like a website or mobile app) to talk with a backend server or database.

## How APIs Work (Simple Explanation)

- The client (browser, app, etc.) sends a request to the server using API endpoints (URLs).
- The server receives the request, processes it, and sends back a response (usually data in JSON format).

Common API Methods:

- GET : Retrieve data (e.g., get a user's info)
- POST : Send new data to be stored (e.g., add a new contact)
- PUT : Update existing data (e.g., update user details)
- DELETE : Remove data (e.g., delete a contact)

Example of API in action:

- Sending a GET request to `/contacts` could return a list of contacts from a database.
- Sending a POST request to `/contacts` with the new contact data could add someone to your contacts.

Other API Concepts:

- REST (Representational State Transfer): An architectural style for designing networked applications. RESTful APIs use standard HTTP methods and are stateless.
- CORS (Cross-Origin Resource Sharing): A security feature in browsers that controls how resources are shared between different origins (domains).
- SOP (Same-Origin Policy): Another security mechanism that restricts how documents or scripts loaded from one origin can interact with resources from another origin.

In summary: An API acts as a bridge that allows different software systems to communicate and exchange data in a structured way.
\*/

/\*
Simple Difference Between XML and JSON:

- XML (eXtensible Markup Language) and JSON (JavaScript Object Notation) are both formats for storing and transporting data.

- XML uses tags like <name>John</name> and is more verbose, looking similar to HTML.
- JSON uses key-value pairs like { "name": "John" } and is usually shorter, easier to read, and used widely in web APIs.

Key Differences:

- XML data is wrapped in custom tags; JSON uses curly braces and square brackets.
- JSON is generally easier to read/write for humans and faster for machines to parse.
- JSON is most commonly used in modern APIs, while XML is older but still used in some systems.
  \*/

  /\*
  How the fetch Method Works to Make an API Call:

The fetch method is a built-in JavaScript function for making HTTP requests, often used to talk to APIs.

Example:

fetch('https://api.example.com/data')
.then(response => response.json()) // Convert response to JSON
.then(data => {
console.log(data); // Use the returned data
})
.catch(error => {
console.error('Error:', error); // Handle errors
});

You can also use fetch to send data:

fetch('/contacts', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name: 'John Doe' })
})
.then(response => response.json())
.then(data => console.log(data));

In summary: Use fetch to easily send requests and get responses from APIs in JavaScript.
\*/

/\*
What is an Endpoint? (Easy Explanation):

An endpoint is a specific URL or path on your server that listens for requests and sends back data or performs an action.

Example:

- In a contacts API, '/contacts' could be an endpoint to get all contacts.
- '/contacts/123' could be an endpoint to get, update, or delete the contact with id 123.

When you send a request to an API, you are "hitting" an endpoint.

Example Endpoints:
GET /contacts --> Get all contacts
POST /contacts --> Add a new contact
GET /contacts/:id --> Get a single contact by ID
PUT /contacts/:id --> Update a contact by ID
DELETE /contacts/:id --> Delete a contact by ID

In summary:
An endpoint is just a URL address in your API that does something when you visit or send data to it.
\*/

/\*
What are URL Parameters?

URL parameters are values added to the end of a URL to pass data to the server. They appear after a question mark (?) and use key=value pairs, separated by &.

Example:
/contacts?company=Acme&sort=desc

In REST APIs, URL parameters are often used to filter, sort, or paginate data.

Types:

1. Query Parameters (after ?):
   - Used for searching/filtering.
   - Example: /contacts?company=Acme

2. Path Parameters (part of the route with :):
   - Used to specify a specific resource.
   - Example: /contacts/:id (e.g., /contacts/123)

Summary:

- Query parameters = for filtering/sorting (after ? in the URL)
- Path parameters = to identify things by ID, included directly in the path

\*/

/\*
What is GraphQL?

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It was developed by Facebook and provides a more flexible and efficient alternative to REST for building APIs.

Key Features of GraphQL:

- **Ask for exactly what you need:** Clients can request only the specific data they need, nothing more, nothing less.
- **Single endpoint:** Unlike REST which has multiple endpoints (e.g., /contacts, /contacts/:id), GraphQL uses a single endpoint for all queries and mutations.
- **Strongly typed:** The API defines a schema which specifies the types of data that can be queried.
- **Real-time updates:** Supports subscriptions for real-time data updates (like chat messaging or notifications).

How does it work?

- Clients send a query describing the structure of the data they want.
- The server responds with a JSON object that matches the query.
- Clients can also send mutations to add, update, or delete data.

Example:

A sample GraphQL query to get a contact's name and email:

```
query {
  contact(id: "123") {
    firstName
    email
  }
}
```

A single GraphQL endpoint (e.g., /graphql) receives this query and returns:

```
{
  "data": {
    "contact": {
      "firstName": "Alice",
      "email": "alice@example.com"
    }
  }
}
```

Summary:

- GraphQL lets you fetch and manipulate data flexibly using a single endpoint.
- You define your data needs in the query; the server responds with just that data.
  \*/

rapidapi for free api resources
