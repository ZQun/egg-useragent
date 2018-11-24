# egg-useragent

eggjs user-agent extend plugin


## Install

```bash
$ npm i egg-useragent --save
```

## Configuration

Change `${app_root}/config/plugin.ts` to enable useragent plugin:

```typescript
export = {
  useragent: {
    enable: true,
    package: 'egg-useragent',
  }
}
```

Configure useragent information in `${app_root}/config/config.default.ts`:

**Instructions**

```typescript
config.useragent = {
    app: true
}
```

Configure useragent information in `${app_root}/app/controller/home.ts`:

**Controller**

```typescript
export class HomeController {

  @get('/index')
  public async index(ctx?): Promise<any> {
    const { ctx, service } = this;

    // 获取请求user-agent
    const getAgent = ctx.getAgent();

    console.log('--userAgent-->', getAgent);


    //...
    //业务逻辑
    //...


    // 正常返回
    return {
      message: '正常数据返回',
      data: [
        {
          name: 'lee',
        }
      ]
    }
  }
}


```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
