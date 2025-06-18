import { useEffect, useRef, type ReactElement } from "react";
import { useContactData } from "../../customHooks/ContactData";
import { Grid } from "gridjs";

import type { IContactData } from "../../interfaces/ContactForm/IUseContactInfo";
import type { Timestamp } from "firebase/firestore";

function Contacts(): ReactElement {
  const { isLoading, error, success, contacts, getAllContacts } =
    useContactData();
  const tableRef = useRef(null);

  const gridRef = useRef<Grid | null>(null);

  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    console.log("contacts", contacts);
  }, [contacts]);

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
          <div ref={tableRef}></div>
        </div>
      </section>
    </>
  );

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
}

export default Contacts;
