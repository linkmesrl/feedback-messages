#Easy feedback messages

Easy angular directive to customize your feedback messages. It is possible to choose different shapes and colors.

Shapes:
* box
* banner

Colors:
* error
* advice
* succes
* info

##How to use it
Import on your file html the following files:

* feedback.js
* feedback.css

Inject into your main module the module:
* 'feedback-module'

##Example
```
<feedback></feedback>
```

    <feedback size="box/banner"></feedback>


    <feedback title="lorem ipsum"></feedback>
  

    <feedback type="error/success/advice/info"></feedback>
 

    <feedback>lorem ipsum dolor docet...</feedback>


