import Link from 'next/link';
import { Inter } from "next/font/google";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Document file={'/ppt.pdf'}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
