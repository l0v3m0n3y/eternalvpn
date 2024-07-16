# eternalvpn
Mobile API eternalvpn.me
# main
```js
async function main(){
    const {eternalvpn} = require('./eternalvpn');
    const vpn= new eternalvpn();
    let req=await vpn.servers_list()
    console.log(req)
}
main()
```
