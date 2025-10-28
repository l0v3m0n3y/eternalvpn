//mobile api function
class eternalvpn{
    constructor(){
        this.api = "http://zmkk.eternalvpn.me"
        this.headers={"Authorization":"Basic ZXRlcm5hbDpsYW5yZXRl","Host":"zmkk.eternalvpn.me","User-Agent":"okhttp/4.11.0"}
    }
    async servers_list(){
        let req=await fetch(`${this.api}/get_all_servers`,{method:"POST",headers: this.headers});
        return req.json();
    }
    async login(email,password){
        let req=await fetch(`${this.api}/login_user`,{method:"POST",headers: this.headers,body:JSON.stringify({"email":email,"islogged":False,"password":password})});
        return req.json()
}
}
module.exports = {eternalvpn};