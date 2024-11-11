export async function middleware(request) {
  // if (request.nextUrl.pathname.startsWith("/")) {
  //   return Response.redirect(new URL("/booking", request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
// import axios from "./utils/axios";

// export async function middleware(request) {
//   const csrftoken = request.cookies.get("csrftoken")?.value;
//   const sessionId = request.cookies.get("sessionid")?.value;

//   const getAuthUserData = async () => {
//     try {
//       await axios("/user/profile/", {
//         headers: {
//           Cookie: `csrftoken=${csrftoken}; sessionid=${sessionId}`,
//           "X-CSRFToken": csrftoken,
//         },
//       });
//       return true;
//     } catch (error) {
//       return false;
//     }
//   };

//   if (
//     request.nextUrl.pathname.startsWith("/my-account") ||
//     request.nextUrl.pathname.match("/resort-checkout/(.*)/thankyou") ||
//     request.nextUrl.pathname.match("/package-checkout/(.*)/thankyou")
//   ) {
//     if (!(await getAuthUserData(csrftoken, sessionId)))
//       return Response.redirect(new URL("/login", request.url));
//   }
//   if (
//     request.nextUrl.pathname.startsWith("/login") ||
//     request.nextUrl.pathname.startsWith("/register") ||
//     request.nextUrl.pathname.startsWith("/forget-password")
//   ) {
//     if (await getAuthUserData(csrftoken, sessionId))
//       return Response.redirect(new URL("/my-account", request.url));
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
