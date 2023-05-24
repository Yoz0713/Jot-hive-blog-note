export function checkEnvironment(apiRoute="string"){
    let api: string;
    if (process.env.NODE_ENV === 'production'&&typeof process.env.NEXT_PUBLIC_ONLINESERVER == "string") {
        api=process.env.NEXT_PUBLIC_ONLINESERVER;
        return{api}
      }else{
        api='http://localhost:3030'+apiRoute;
        return{api}
      }
}