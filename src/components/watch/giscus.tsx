// import React, { useEffect } from "react";
//
// const GiscusComments = ({ movieId }: { movieId: any }) => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://giscus.app/client.js";
//     script.setAttribute("data-repo", "WangJian9522/Giscus");
//     script.setAttribute("data-repo-id", "R_kgDOOKDY9g");
//     script.setAttribute("data-category", "电影评论");
//     script.setAttribute("data-category-id", "DIC_kwDOOKDY9s4CoJVK");
//     script.setAttribute("data-mapping", "specific");
//     script.setAttribute("data-term", movieId);
//     script.setAttribute("data-strict", "0");
//     script.setAttribute("data-reactions-enabled", "1");
//     script.setAttribute("data-emit-metadata", "0");
//     script.setAttribute("data-input-position", "top");
//     script.setAttribute("data-theme", "preferred_color_scheme");
//     script.setAttribute("data-lang", "zh-CN");
//     script.setAttribute("data-loading", "lazy");
//     script.setAttribute("crossOrigin", "anonymous");
//     script.async = true;
//     document.head.appendChild(script);
//     return () => {
//       // Clean up the script when the component unmounts
//       const existingScript = document.querySelector(
//         'script[src="https://giscus.app/client.js"]',
//       );
//       if (existingScript) {
//         existingScript.remove();
//       }
//     };
//   }, [movieId]);
//
//   return <div className="giscus"></div>;
// };
//
// export default GiscusComments;
