# loader

🚀 Loading theme js files for awescnb.

Loader receives a configuration object, mounts the object to window, and then loads the corresponding theme file according to the `configurationObject.theme.name` in the incoming object.

## Usage

```html
<script src="https://acnb.gitee.io/acnb-loader/loader.iife.js"></script>
<script>
  const opts = {
    theme: {
      name: "geek",
    },
    // Your other configurations
  };
  $.awesCnb(opts);
</script>
```
