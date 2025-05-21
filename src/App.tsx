
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools";
import RecentFiles from "./pages/RecentFiles";
import Merge from "./pages/tools/Merge";
import Split from "./pages/tools/Split";
import Compress from "./pages/tools/Compress";
import Convert from "./pages/tools/Convert";
import Rotate from "./pages/tools/Rotate";
import Watermark from "./pages/tools/Watermark";
import Protect from "./pages/tools/Protect";
import Unlock from "./pages/tools/Unlock";
import PdfToWord from "./pages/tools/PdfToWord";
import PdfToExcel from "./pages/tools/PdfToExcel";
import PdfToPowerPoint from "./pages/tools/PdfToPowerPoint";
import WordToPdf from "./pages/tools/WordToPdf";
import ExcelToPdf from "./pages/tools/ExcelToPdf";
import PowerPointToPdf from "./pages/tools/PowerPointToPdf";
import PdfToJpg from "./pages/tools/PdfToJpg";
import JpgToPdf from "./pages/tools/JpgToPdf";
import HtmlToPdf from "./pages/tools/HtmlToPdf";
import PdfToA from "./pages/tools/PdfToA";
import EditPdf from "./pages/tools/EditPdf";
import SignPdf from "./pages/tools/SignPdf";
import OrganizePdf from "./pages/tools/OrganizePdf";
import RepairPdf from "./pages/tools/RepairPdf";
import PageNumbers from "./pages/tools/PageNumbers";
import ScanToPdf from "./pages/tools/ScanToPdf";
import OcrPdf from "./pages/tools/OcrPdf";
import ComparePdf from "./pages/tools/ComparePdf";
import RedactPdf from "./pages/tools/RedactPdf";
import CropPdf from "./pages/tools/CropPdf";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/recent" element={<RecentFiles />} />
          <Route path="/tools/merge" element={<Merge />} />
          <Route path="/tools/split" element={<Split />} />
          <Route path="/tools/compress" element={<Compress />} />
          <Route path="/tools/convert" element={<Convert />} />
          <Route path="/tools/rotate" element={<Rotate />} />
          <Route path="/tools/watermark" element={<Watermark />} />
          <Route path="/tools/protect" element={<Protect />} />
          <Route path="/tools/unlock" element={<Unlock />} />
          <Route path="/tools/pdf-to-word" element={<PdfToWord />} />
          <Route path="/tools/pdf-to-excel" element={<PdfToExcel />} />
          <Route path="/tools/pdf-to-powerpoint" element={<PdfToPowerPoint />} />
          <Route path="/tools/word-to-pdf" element={<WordToPdf />} />
          <Route path="/tools/excel-to-pdf" element={<ExcelToPdf />} />
          <Route path="/tools/powerpoint-to-pdf" element={<PowerPointToPdf />} />
          <Route path="/tools/pdf-to-jpg" element={<PdfToJpg />} />
          <Route path="/tools/jpg-to-pdf" element={<JpgToPdf />} />
          <Route path="/tools/html-to-pdf" element={<HtmlToPdf />} />
          <Route path="/tools/pdf-to-pdfa" element={<PdfToA />} />
          <Route path="/tools/edit-pdf" element={<EditPdf />} />
          <Route path="/tools/sign-pdf" element={<SignPdf />} />
          <Route path="/tools/organize-pdf" element={<OrganizePdf />} />
          <Route path="/tools/repair-pdf" element={<RepairPdf />} />
          <Route path="/tools/page-numbers" element={<PageNumbers />} />
          <Route path="/tools/scan-to-pdf" element={<ScanToPdf />} />
          <Route path="/tools/ocr-pdf" element={<OcrPdf />} />
          <Route path="/tools/compare-pdf" element={<ComparePdf />} />
          <Route path="/tools/redact-pdf" element={<RedactPdf />} />
          <Route path="/tools/crop-pdf" element={<CropPdf />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
