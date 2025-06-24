import { useEffect, useRef, type ReactElement } from "react";
import { useContactData } from "../../customHooks/ContactData";
import { Grid } from "gridjs";

import type { IContactData } from "../../interfaces/ContactForm/IUseContactInfo";
import type { Timestamp } from "firebase/firestore";
import "gridjs/dist/theme/mermaid.css";
// import GridjsTable from "../../components/GridjsTable/GridjsTable";
import CustomTable from "../../components/CustomTable/CustomTable";

function Contacts(): ReactElement {
  //@ts-ignore
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

  //@ts-ignore
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

  //@ts-ignore
  function clicked(): void {
    console.log("clicked");
  }

  return (
    <>
      <section className="container">
        <h2 className="section-header-center">Contacts</h2>
        <div className="section-body-center">
          <div className="card-group-h">
            <div className="data-card">
              <div className="card-header">
                <p>Total Submissions</p>
              </div>
              <div className="card-body">
                <p>6</p>
              </div>
            </div>
            <div className="data-card">
              <div className="card-header">
                <p>New Submissions</p>
              </div>
              <div className="card-body">
                <p className="lime">2</p>
              </div>
            </div>
            <div className="data-card">
              <div className="card-header">
                <p>Total Submission</p>
              </div>
              <div className="card-body">
                <p>6</p>
              </div>
            </div>
            <div className="data-card">
              <div className="card-header">
                <p>Total Submission</p>
              </div>
              <div className="card-body">
                <p>6</p>
              </div>
            </div>
          </div>
          <div className="selector-left-right">
            {/* <div className="form"> */}
            {/* </div> */}
            <input
              id="contact-search"
              type="text"
              className="form__input"
              placeholder="Search Contact"
            />
            <div className=" btn__group">
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
          </div>

          {/* <GridjsTable /> */}
          <CustomTable />
        </div>
      </section>
    </>
  );
}

export default Contacts;
