# loader

🚀 Loading theme js files for awescnb.

Loader receives a configuration object, mounts the object to window, and then loads the corresponding theme file according to the `configurationObject.theme.name` in the incoming object.

## Usage

```html
<script src="https://cdn.jsdelivr.net/gh/awescnb/acnb-loader@latest/dist/loader.iife.js"></script>
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
