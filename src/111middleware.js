// import { NextResponse } from "next/server";
// import { verfiy } from 'jsonwebtoken'

// const KEY = 'ababaffffffffffbba'


// export default function middleware(req) {
//     let cookie = req.cookies.get('token')?.value
//     const url = req.url;

//     if (url.includes('/login') && cookie !== undefined) {
//         return NextResponse.rewrite(new URL('/', req.url));
//     }
//     if (url.includes('/dashboard')) {
//         if (cookie === undefined) {
//             return NextResponse.rewrite(new URL('/error', req.url));
//         }
//         try {
//             verfiy(jwt, KEY);
//             return NextResponse.next();
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     return NextResponse.next();
// }

