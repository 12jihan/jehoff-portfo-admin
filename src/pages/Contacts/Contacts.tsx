import { useEffect, type ReactElement } from "react";
import { NavLink } from "react-router";
import { useContactData } from "../../customHooks/ContactData";
import type { IContactData } from "../../interfaces/ContactForm/IUseContactInfo";
import type { Timestamp } from "firebase/firestore";

function Contacts(): ReactElement {
  const { isLoading, error, success, contacts, getAllContacts } =
    useContactData();

  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    console.log("contacts", contacts);
  }, [contacts]);

  return (
    <>
      <section className="container">
        <h2 className="section-header-center">Coming Soon...</h2>
        <div className="section-body-center">
          <div className="contacts-table-container">
            {contacts &&
              contacts.map(
                (item: IContactData, index: number): ReactElement => (
                  <div className="contact-item" key={index}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.message}</p>
                    <p>{convertTimestamp(item.dateCreated)}</p>
                    <p>{convertTimestamp(item.dateModified)}</p>
                  </div>
                ),
              )}
          </div>
        </div>
      </section>
    </>
  );

  function convertTimestamp(timestamp: Timestamp): any {
    const newDate = timestamp.toDate().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return newDate;
  }
}

export default Contacts;
