// import { ActionIcon, Modal, ScrollArea, Tooltip } from "@mantine/core";
// import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
// import { Document, Page } from "react-pdf";
// import { Info } from "../User";

// const ResumeViewer = (props: any) => {
//   const btn = "md"; // Assuming you want to default to "md" button size

//   return (
//     <Modal.Root
//       scrollAreaComponent={ScrollArea.Autosize}
//       size="auto"
//       centered
//       className="font-mono"
//       opened={props.opened}
//       onClose={props.close}
//     >
//       <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
//       <Modal.Content className="!rounded-3xl">
//         <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor xs-mx:!border !border-2 xs-mx:!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
//           <Modal.Title
//             data-autofocus
//             className="!text-4xl xs-mx:!text-2xl text-white flex gap-3 items-center !font-bold"
//           >
//             Resume
//             <Tooltip
//               label="Download"
//               className="!text-bgColor"
//               color="#64FFDA"
//               position="right"
//               offset={5}
//             >
//               <ActionIcon
//                 className="!text-primaryColor"
//                 component="a"
//                 href="/Resume.pdf" // Make sure it's from public directory
//                 size={btn}
//                 download={Info.name}
//                 variant="outline"
//                 color="#64FFDA"
//               >
//                 <IconArrowBigDownLineFilled className="xs-mx:!w-[16px]" />
//               </ActionIcon>
//             </Tooltip>
//           </Modal.Title>
//           <Modal.CloseButton
//             size="md"
//             iconSize="30px"
//             className="!bg-bgColor !text-red-500"
//           />
//         </Modal.Header>
//         <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
//           <Document
//             className="w-full !rounded-2xl !overflow-hidden"
//             file="/Resume.pdf" // Make sure it's the correct path from public
//             onLoadError={(error) =>
//               console.error("Error while loading PDF:", error)
//             }
//           >
//             <Page
//               className="w-full"
//               pageNumber={1}
//               renderTextLayer={false}
//               renderAnnotationLayer={false}
//             />
//           </Document>
//         </Modal.Body>
//       </Modal.Content>
//     </Modal.Root>
//   );
// };

// export default ResumeViewer;
import { useState } from "react";
import { ActionIcon, Modal, ScrollArea, Tooltip } from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const ResumeViewer = (props: any) => {
  const btn = "md"; // Assuming you want to default to "md" button size
  const [numPages, setNumPages] = useState<number | null>(null);

  // Called when the document is successfully loaded
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages); // Set the total number of pages
  };

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="auto"
      centered
      className="font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor xs-mx:!border !border-2 xs-mx:!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="!text-4xl xs-mx:!text-2xl text-white flex gap-3 items-center !font-bold"
          >
            Resume
            <Tooltip
              label="Download"
              className="!text-bgColor"
              color="#64FFDA"
              position="right"
              offset={5}
            >
              <ActionIcon
                className="!text-primaryColor"
                component="a"
                href="/Resume.pdf" // Make sure it's from public directory
                size={btn}
                download={Info.name}
                variant="outline"
                color="#64FFDA"
              >
                <IconArrowBigDownLineFilled className="xs-mx:!w-[16px]" />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <Document
            className="w-full !rounded-2xl !overflow-hidden"
            file="/Resume.pdf" // Make sure it's the correct path from public
            onLoadError={(error) =>
              console.error("Error while loading PDF:", error)
            }
            onLoadSuccess={onDocumentLoadSuccess} // Set the total number of pages
          >
            {/* Render each page */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                className="w-full"
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ResumeViewer;
