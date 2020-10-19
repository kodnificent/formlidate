# Formlidate

Formlidate is a javascript plugin that makes validating html forms less painless for frontend developers.
It ships with many core validation rules and also gives you room to add customized validation rules.
It handles error message display and handles validation when a change event is fired.

## Installation

### Via NPM

`npm i @kodnificent/formlidate`

### Via CDN

```html
<script src="https://unpkg.com/@kodnificent/formlidate@1"></script>

<!-- Minified version (Production use) -->
<script src="https://unpkg.com/@kodnificent/formlidate@1/dist/formlidate.min.js"></script>
```

## Quick Start

```html
<form id="my-form">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" data-rules="required|alpha_num">
    <span data-username-feedback></span>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" data-rules="required|email">
    <span data-email-feedback></span>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="text" id="password" name="password" data-rules="required">
    <span data-password-feedback></span>
  </div>
  <div>
    <button>submit</button>
  </div>
</form>

<script>
  const validator = new Formlidate('#my-form');
</script>
```

## Validating a form

To validate a HTML Form you have to make a new instance the Formlidate class and
optionally pass the form selector and options as parameters.

When instantiating the class without any parameters, Formlidate will use `'form'` as
the default selector and expect rules to be written inline.

```javascript
const validator = new Formlidate();

// is equivalent to
const validator = new Formlidate('form', {});
```

### Specifying the target selector

By default, Formlidate uses `'form'` as the Selector if no value is present.
You can use any valid element selector or an HTMLElement.

**Using Selector**

```javascript
const validator = new Formlidate('.my-form-class');
```

**Using HTMLElement**

```javascript
const el = document.querySelector('.my-form-class');
const validator = new Formlidate(el);
```

### Conifguration Options

The second paramater of the Formlidate constructor should be an object containing the following configuration options.

| Key      | Type       | Description                                       | Default |
|----------|------------|---------------------------------------------------|---------|
| rules    | object     | An object containing rules for each form field.   | `null`  |
| messages | object     | An object containing messages that will be thrown when a field fails validation for a rule | `null` |
| fieldSelector | string | Used for selecting target fields in the HTML form when rules are defined in the options | `[name=:attribute]` |
| feedbackSelector | string | Used for selecting the target element when error messages for each field will be placed | `[data-:attribute-feedback]` |
| beforeValidate | function | Callback to call before validating the form | `function` |
| onInvalid | function | Callback to call when there is a validation error on a form | `function` |
| onChange | function | Callback to call when a field's value changes | `function` |
| validated | function | Callback to call after the form passes validation | `function` |

### Field Rules

You can specify validation rules for a form field directly on the field element by defining a `data-rules` attribute or
in the configuration option by defining a rules object.

**Inline rules**

```html
<form>
  <div>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" data-rules="required|email">
    <span data-email-feedback></span>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="text" id="password" name="password" data-rules="required">
    <span data-password-feedback></span>
  </div>
  <div>
    <button>submit</button>
  </div>
</form>

<script>
  const validator = new Formlidate();
</script>
```

**Conifguration rules**

```html
<form id="my-form">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <span data-username-feedback></span>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email">
    <span data-email-feedback></span>
  </div>
  <div>
    <button>submit</button>
  </div>
</form>

<script>
  const validator = new Formlidate('#my-form', {
    rules: {
      username: 'required|alpha_num', // rules can be separated with the pipe character
      email: ['required', 'email', (value, data, attribute) => true] // or can be placed in an array
    }
  });
</script>
```

## Core rules

Formlidate ships with some core rules that contains most of the validation rules we apply regularly.

| key            | Description                                                                    |
|----------------|--------------------------------------------------------------------------------|
| `accepted`     | The field under validation must be accepted. Accepted values are `yes`, `on`, `1` or `true`. This rule comes in handy when validating a terms and condition field. |
| `alpha`        | The field must contain only alphabets. |
| `alpha_dash`   | The field must contain only alphanumeric characters as well as dashes and underscores. |
| `alpha_num`    | The field must contain only alphanumeric characters. |
| `array`        | The field must be an array. |
| `boolean`      | The field must be able to cast to a boolean. Accepted values are `1`, `0`, `true`, `false`, `'1'`, `'0'`, `'true'`, `'false'`. |
| `contains:param1,param2` | The field under validation must contain any of the given parameters. |
| `date`         | The field under validation must be a validate date. |
| `different:field` | The field under validation must have a different value from another field. E.g A `secondary_email` field might have this rule `different:email`. |
| `digits:length` | The field under validation must be a digit with a specific length. E.g a `pin` field might have this rule `digits:4` to validate a 4 digit pin. |
| `digits_between:min,max` | The field under validation must be a digit and have a length between the specified min and max. |
| `email`         | The field under validation must be a valid email address. |
| `ends_with:value1,value2,...` | The field under validation must end with any of the given list of values. E.g `ends_with:.com,.io,.com.ng`. |
| `file`          | The field under validation must be a valid file. |
| `gt:someOtherField` | The value of the field under validation must be greater than another field. |
| `gte:someOtherField` | The value of the field under validation must be greater than or equal to another field. |
| `in:value1,value2,...`  | The field under validation must be included in any of the given list of values. |
| `lt:someOtherField` | The value of the field under validation must be less than another field. |
| `lte:someOtherField` | The value of the field under validation must be less than or equal to another field. |
| `regex:pattern` | The field under validation must match the regular expression pattern. Make sure that you escape special characters. |
| `required`      | The field under validation must be present and not null or undefined or an empty string. |
| `required_if:otherField,value` | The field under validation is required if another field has a specific value. |
| `same:field`    | The field under validation must have the same value as another field. E.g a `confirm_password` field may have this rule `same:password` |
| `starts_with:value1,value2,...` | The field under validation must start with any of the given list of values. E.g `starts_with:https://facebook.com,https://fb.com` |

## Resources

* [Changelog](CHANGELOG.md)
* [Upgrade Guide](UPGRADE_GUIDE.md)
* [Contributing Guide](CONTRIBUTING.md)
* [Code of Conduct](CODE_OF_CONDUCT.md)

## Credits

Formlidate is inspired by [Laravel's validation feature](https://laravel.com/docs/8.x/validation).

## Liecense

[MIT](LICENSE)
