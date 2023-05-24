
export async function getPostById(id:string){

    const response = await fetch("http://localhost:3030/post?id="+id,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
          mode:"cors"
    })
    const data = await response.json()
    console.log(data)
}
export async function getAllPost(){
    const response = await fetch("http://localhost:3030/post?id=all",{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
          mode:"cors"
    })
    const data = await response.json()
    return data
}
