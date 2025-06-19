import { useEffect, useRef, type ReactElement } from "react";
import { useContactData } from "../../customHooks/ContactData";
import { Grid } from "gridjs";

import type { IContactData } from "../../interfaces/ContactForm/IUseContactInfo";
import type { Timestamp } from "firebase/firestore";

function Contacts(): ReactElement {
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
        convertTimestamp(contact.dateCreated),
        convertTimestamp(contact.dateModified),
      ]);

      // Create new Grid instance
      gridRef.current = new Grid({
        columns: ["ID", "Name", "Email", "Date Created", "Date Modified"],
        data: gridData,
        search: false,
        sort: true,
        pagination: false,
        className: {
          table: "table-scrollable",
          thead: "grid-thead",
          tbody: "grid-tbody",
          th: "grid-th",
          td: "grid-td",
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

  function clicked(): void {
    console.log("clicked");
  }

  return (
    <>
      <section className="container">
        <h2 className="section-header-center">Contacts</h2>
        <div className="section-body-center">
          <div className="selector btn__group">
            <button className="btn btn--light-outline" type="button">
              View All
            </button>
            <button className="btn btn--light-outline" type="button">
              Unread
            </button>
            <button className="btn btn--light-outline" type="button">
              Recently Updated
            </button>
            <button className="btn btn--light-outline" type="button">
              Archived
            </button>
          </div>

          {isLoading && <div>Loading contacts...</div>}
          {error && <div>Error: {error}</div>}
          <div ref={tableRef}></div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
