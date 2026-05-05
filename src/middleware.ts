import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (import.meta.env.DEV) {
    return next();
  }

  if (context.url.pathname.startsWith("/studio")) {
    const token = context.cookies.get("admin");

    if (!token) {
      return context.redirect("/");
    }
  }

  return next();
});



// export const onRequest = defineMiddleware((context, next) => {
//   const { pathname, hostname } = context.url;

//   if (pathname.startsWith("/studio")) {

//     if (hostname === "localhost") {
//       return next();
//     }

//     const token = context.cookies.get("admin");

//     if (!token) {
//       return context.redirect("/");
//     }
//   }

//   return next();
// });