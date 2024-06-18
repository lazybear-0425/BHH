// import Image from "next/image";
// import Link from 'next/link';
// import { Inter } from "next/font/google";
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.js';

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const change = () => {
//     let doc = document.querySelectorAll('p.title_3, p.title_1') as NodeListOf<HTMLElement>;
//     doc.forEach((p) => {
//       p.innerHTML = 'hello';

//       p.addEventListener('click', () => { p.style.color = 'red'; })
//     })
//   };
//   return (
//     <div>
//       <Document file={'/ppt.pdf'}>
//         <Page pageNumber={1} />
//       </Document>
//       <Image src="/photo.jpg" alt='' height={300} width={300} />
//     </div>
//     //   <div className="container mx-auto mt-10">
//     //     <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
//     //       <Link href="/hi">
//     //         <div className="flex h-44 w-full items-center rounded-3xl border-4 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] hover:bg-yellow-200">
//     //           <div>
//     //             <p className="text-2xl font-bold">My Title</p>
//     //             <p className="mt-4 text-lg font-medium leading-relaxed">Description</p>
//     //           </div>
//     //         </div>
//     //       </Link>
//     //       <Link href="/hi">
//     //         <div className="flex h-44 w-full items-center rounded-3xl border-4 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] hover:bg-yellow-200">
//     //           <div>
//     //             <p className="text-2xl font-bold">My Title</p>
//     //             <p className="mt-4 text-lg font-medium leading-relaxed">Description</p>
//     //           </div>
//     //         </div>
//     //       </Link>
//     //       <Link href="/hi" onClick={change}>
//     //         <div className="flex h-44 w-full items-center rounded-3xl border-4 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] hover:bg-yellow-200">
//     //           <div>
//     //             <p className="text-2xl font-bold title_2 title_3">My Title</p>
//     //             <p className="mt-4 text-lg font-medium leading-relaxed title_2 title_1">Description</p>
//     //           </div>
//     //         </div>
//     //       </Link>
//     //     </div>
//     //   </div>
//   );
// }
