import { useEffect, useRef, type ReactElement } from "react";
import { useContactData } from "../../customHooks/ContactData";
import { Grid } from "gridjs";

import type { IContactData } from "../../interfaces/ContactForm/IUseContactInfo";
import type { Timestamp } from "firebase/firestore";
import "gridjs/dist/theme/mermaid.css";
import "./GridjsTable.scss";

function GridjsTable(): ReactElement {
  const { isLoading, error, contacts, getAllContacts } = useContactData();

  const tableRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<Grid | null>(null);

  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    if (contacts && contacts.length > 0 && tableRef.current) {
      if (gridRef.current) {
        gridRef.current.destroy();
      }

      // Trnasform contacts data for Grid.js
      const gridData = contacts.map((contact: IContactData) => [
        contact.id,
        contact.name,
        contact.email,
        // convertTimestamp(contact.dateCreated),
        // convertTimestamp(contact.dateModified),
      ]);
      console.log("grid data", gridData);
      // Create new Grid instance
      gridRef.current = new Grid({
        columns: ["ID", "Name", "Email"],
        data: gridData,
        search: false,
        sort: false,
        pagination: false,
        resizable: true,
        height: "400px",
        fixedHeader: true,
        className: {
          container: "grid-container",
          table: "table-scrollable",
          thead: "grid-thead",
          tbody: "grid-tbody",
          th: "grid-th",
          td: "grid-td",
        },
        style: {
          container: {
            // "background-color": "transparent",
            // border: "1px solid #f8f9fa",
          },
          table: {
            // "background-color": "transparent",
            // "table-layout": "fixed",
          },
          th: {
            "background-color": "#f8f9fa",
            // color: "#f8f9fa",
          },
          td: {
            "background-color": "transparent",
            color: "#f8f9fa",
            // padding: "8px 12px",
            // "border-bottom": "1px solid #dee2e6",
          },
        },
      });

      // Render the grid
      gridRef.current.render(tableRef.current);
    }
    console.log("contacts", contacts);
  }, [contacts]);

  useEffect(() => {
    return () => {
      if (gridRef.current) {
        gridRef.current.destroy();
      }
    };
  }, []);

  function convertTimestamp(timestamp: Timestamp): any {
    const newDate = timestamp.toDate().toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return newDate;
  }

  return (
    <>
      {isLoading && <div>Loading contacts...</div>}
      {error && <div>Error: {error}</div>}
      <div className="grid-js-container" ref={tableRef}></div>
    </>
  );
}

export default GridjsTable;
