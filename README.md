# cookie-manager-js

cookie management library in JavaScript

## Installation

```bash
npm install cookie-manager
# or
yarn add cookie-manager
```

## Usage

```js
import cookieManager from 'cookie-manager-js';
```

## Functionalities

### Retrieving a Cookie

Getting a cookie with given cookie name

```js
cookieManager.get(name); 
```

### Listing All Cookies

Returns all of the existing cookies

```js
cookieManager.find();
```

### Creating a Cookie

Creating a new cookie

```js
cookieManager.create(name, value, expires, domain, path, secure);
```

### Updating a Cookie

Updating an existing cookie

```js
cookieManager.update(name, value, expires, domain, path, secure);
```

### Deleting a Cookie

Deleting a cookie with given cookie name

```js
cookieManager.remove(name);
```

### Clearing All Cookies

Clears all of the existing cookies

```js
cookieManager.clear();
```

## License

Licensed under the [MIT](licence.txt) License.
