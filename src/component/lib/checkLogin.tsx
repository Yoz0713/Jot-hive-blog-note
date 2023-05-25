import { checkEnvironment } from "./checkEnvironment";
  
export async function checkLogin(){
    try {
        let api = checkEnvironment("/loginChecking").api
        console.log(api)
        const response = await fetch(api); // 發送請求到後端的路由 '/loginChecking'
        const data = await response.json();
  
        if (data.loggedIn) {
            return true
        } else {
          // 使用者未登入，導向登入頁面
            return false
        }
      } catch (error) {
        console.error('Error:', error);
      }
}