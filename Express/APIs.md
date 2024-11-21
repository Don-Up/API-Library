### Comprehensive List of Express.js APIs

Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications. Below is a comprehensive list of the core Express.js APIs, categorized based on their functionality.

---

### **1. Basic Setup APIs**

- **`express()`**: Initializes an Express application.
  
  ```js
  const express = require('express');
  const app = express();
  ```

---

### **2. Application Methods (app)**

These methods are available on the `app` object (the Express application instance).

#### **HTTP Methods**
- **`app.get(path, callback)`**: Defines a route handler for `GET` requests.
- **`app.post(path, callback)`**: Defines a route handler for `POST` requests.
- **`app.put(path, callback)`**: Defines a route handler for `PUT` requests.
- **`app.delete(path, callback)`**: Defines a route handler for `DELETE` requests.
- **`app.patch(path, callback)`**: Defines a route handler for `PATCH` requests.
- **`app.all(path, callback)`**: Matches all HTTP methods (GET, POST, etc.) on a given route.

  ```js
  app.get('/', (req, res) => res.send('Hello World!'));
  ```

#### **Routing Helpers**
- **`app.route(path)`**: Creates a chainable route handler for specific paths.

  ```js
  app.route('/user')
    .get((req, res) => res.send('Get a user'))
    .post((req, res) => res.send('Add a user'));
  ```

- **`app.param(name, callback)`**: Adds an automatic handler for route parameters.

  ```js
  app.param('user', (req, res, next, id) => {
    req.user = { id: id, name: 'John Doe' }; // Simulate user lookup
    next();
  });
  ```

#### **Middleware**
- **`app.use(path?, middleware)`**: Registers middleware functions. If no path is provided, the middleware applies to all routes.

  ```js
  app.use((req, res, next) => {
    console.log('Middleware executed!');
    next();
  });
  ```

#### **Settings**
- **`app.set(name, value)`**: Sets various application settings (e.g., `app.set('view engine', 'pug')`).
- **`app.get(name)`**: Gets the value of an application setting.
  
  ```js
  app.set('port', process.env.PORT || 3000);
  ```

#### **Application-Level APIs**
- **`app.listen(port, [hostname], [backlog], callback)`**: Binds and listens for connections on the specified host and port.

  ```js
  app.listen(3000, () => console.log('Server running on port 3000'));
  ```

- **`app.locals`**: An object that provides local variables for the application.
  
  ```js
  app.locals.title = 'My App';
  ```

---

### **3. Response Methods (res)**

The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request.

#### **Basic Response**
- **`res.send(body)`**: Sends a response (can be a string, object, or buffer).
  
  ```js
  res.send('Hello, World!');
  ```

- **`res.json(obj)`**: Sends a JSON response.
  
  ```js
  res.json({ message: 'Hello, World!' });
  ```

- **`res.status(code)`**: Sets the HTTP status for the response.
  
  ```js
  res.status(404).send('Not Found');
  ```

- **`res.sendFile(path, [options], [callback])`**: Sends a file as an octet stream.

  ```js
  res.sendFile('/path/to/file');
  ```

#### **Redirection**
- **`res.redirect([status], path)`**: Redirects to the specified URL.

  ```js
  res.redirect('http://example.com');
  ```

#### **Headers**
- **`res.set(field, [value])`**: Sets the response's HTTP headers.
  
  ```js
  res.set('Content-Type', 'text/html');
  ```

- **`res.get(field)`**: Gets the value of a header.
  
  ```js
  const contentType = res.get('Content-Type');
  ```

#### **Cookies**
- **`res.cookie(name, value, [options])`**: Sets a cookie.
  
  ```js
  res.cookie('name', 'John', { maxAge: 900000, httpOnly: true });
  ```

- **`res.clearCookie(name, [options])`**: Clears a cookie.
  
  ```js
  res.clearCookie('name');
  ```

#### **End Methods**
- **`res.end([data], [encoding])`**: Ends the response process.
  
  ```js
  res.end();
  ```

---

### **4. Request Methods (req)**

The `req` object represents the HTTP request received by the Express app.

#### **Request Properties**
- **`req.params`**: Contains route parameters (e.g., `req.params.id` for `/user/:id`).
  
  ```js
  app.get('/user/:id', (req, res) => res.send(req.params.id));
  ```

- **`req.query`**: Contains query string parameters (e.g., `req.query.name` for `/user?name=John`).

  ```js
  app.get('/search', (req, res) => res.send(req.query.q));
  ```

- **`req.body`**: Contains the parsed body of the request (requires body-parsing middleware).
  
  ```js
  app.use(express.json());
  app.post('/submit', (req, res) => res.send(req.body));
  ```

- **`req.headers`**: Contains the request headers.
  
  ```js
  const contentType = req.headers['content-type'];
  ```

- **`req.cookies`**: Contains cookies sent by the client (requires cookie-parsing middleware).
  
  ```js
  const userCookie = req.cookies['user'];
  ```

- **`req.method`**: Contains the HTTP method (e.g., GET, POST).
  
  ```js
  const method = req.method; // 'GET', 'POST'
  ```

- **`req.url`**: Contains the URL of the request.
  
  ```js
  const url = req.url;
  ```

#### **Request Methods**
- **`req.get(field)`**: Gets the value of a request header.
  
  ```js
  const contentType = req.get('Content-Type');
  ```

- **`req.is(type)`**: Checks the content type of the request.

  ```js
  if (req.is('json')) {
    res.send('Content-Type is JSON');
  }
  ```

---

### **5. Router APIs**

Express provides a `Router` object for routing modular, mountable route handlers.

- **`express.Router()`**: Creates a new router object.

  ```js
  const router = express.Router();
  ```

#### **Router Methods**
- **`router.get(path, callback)`**: Defines a `GET` route for the router.
- **`router.post(path, callback)`**: Defines a `POST` route for the router.
- **`router.use([path], middleware)`**: Registers middleware for the router.

  ```js
  router.get('/users', (req, res) => res.send('Users list'));
  app.use('/api', router); // Mounts the router at the /api path
  ```

#### **Route Grouping**
- **`router.route(path)`**: Chainable route handler.
  
  ```js
  router.route('/user')
    .get((req, res) => res.send('Get a user'))
    .post((req, res) => res.send('Create a user'));
  ```

---

### **6. Middleware APIs**

Express middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function.

- **`app.use([path], middleware)`**: Registers middleware globally or for specific routes.
  
  ```js
  app.use((req, res, next) => {
    console.log('Request received');
    next(); // Pass control to the next middleware
  });
  ```

#### **Error-Handling Middleware**
- **`app.use((err, req, res, next))`**: Special middleware for handling errors.
  
  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  ```

---

### **7. Template Engine APIs**

Express supports template engines for rendering dynamic HTML.

- **`app.set('view engine', engine)`**: Sets the template engine.
- **`app.set('views', path)`**: Sets the directory where template files are located.
- **`res.render(view, [locals], callback)`**: Renders a view using the template engine.

  ```js
  app.set('view engine', 'pug'); // Use Pug as the template engine
  app.set('views', './views');   // Set the views directory
  app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
  });
  ```

---

### **8. Error Handling APIs**

- **`app.use((err, req, res, next))`**: Special middleware for catching errors in the app. It must have four arguments to be recognized as an error handler.

  ```js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  ```

---

### **9. Utility APIs**

#### **Static Files**
- **`express.static(root, [options])`**: Serves static files from a directory.

  ```js
  app.use(express.static('public')); // Serve static files from the 'public' directory
  ```

#### **Body Parsing**
- **`express.json([options])`**: Middleware to parse incoming JSON request bodies.
- **`express.urlencoded([options])`**: Middleware to parse URL-encoded bodies (from HTML forms).

  ```js
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  ```

---

### Summary

The Express.js API provides a wide variety of features for handling routing, middleware, request/response processing, and error handling. Whether you're building RESTful services, dynamic web applications, or server-side rendered views, Express has a simple and flexible API to help you achieve your goals efficiently.