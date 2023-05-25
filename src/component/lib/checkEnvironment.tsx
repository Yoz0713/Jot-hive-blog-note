export function checkEnvironment(apiRoute="string"){
    let api: string;
    if (process.env.NODE_ENV !== 'development'&&typeof process.env.NEXT_PUBLIC_ONLINESERVER == "string") {
        api=process.env.NEXT_PUBLIC_ONLINESERVER+apiRoute;
        return{api}
      }else{
        api='http://localhost:3030'+apiRoute;
        return{api}
      }
}