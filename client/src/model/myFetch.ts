// export function rest(url: string, data?: unknown, method?: string){
//     return fetch(url, {
//         method: method ?? (data ? "POST" : "GET"),
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: data ? JSON.stringify(data) : undefined,
//     })
//     .then(x => x.json())
// }

// change to use dot env later!
const ROOT = import.meta.env.VITE_API_ROOT;

export async function rest(url: string, data?: {}, method?: string) {
  const response = await fetch(ROOT + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  console.log(data)
  if(response.ok){
        return await response.json();
    } else {
        console.log(data)
        throw await response.json();
    }
}
