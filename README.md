# acnb-loader

**English** | [中文](./README.zh-CN.md)

🚀 Loading theme js file for awescnb.

removed jQuery for the package, added support with ES6+TS

Loader receives a configuration object, mounts the object to window, and then loads the corresponding theme file according to the `configurationObject.theme.name` in the incoming object.

## Usage

Load skins via theme name.

```html
<script src="https://blog-static.cnblogs.com/files/guangzan/loader.min.js"></script>
<script>
  const opts = {
    theme: {
      name: "geek",
    },
    // other configurations
  };
  $.awesCnb(opts); // use jquery directly in cnblog custom JS
</script>
```

Load skins via theme URL.

```html
<script src="https://blog-static.cnblogs.com/files/guangzan/loader.min.js"></script>
<script>
  const opts = {
    theme: {
      name: "https://guangzan.gitee.io/awescnb/reacg.js",
    },
    // other configurations
  };
  $.awesCnb(opts); // use jquery directly in cnblog custom JS
</script>
```
