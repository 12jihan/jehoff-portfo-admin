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

          <table className="table-scrollable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date Created</th>
                <th>Date Modified</th>
              </tr>
            </thead>
            <tbody>
              {contacts &&
                contacts.map(
                  (item: IContactData, index: number): ReactElement => (
                    <tr className="" key={index} onClick={clicked}>
                      <td>
                        <p>{item.id}</p>
                      </td>
                      <td>
                        <p>{item.name}</p>
                      </td>
                      <td>
                        <p>{item.email}</p>
                      </td>
                      <td>
                        <p>{convertTimestamp(item.dateCreated)}</p>
                      </td>
                      <td>
                        <p>{convertTimestamp(item.dateModified)}</p>
                      </td>
                      {/* <td> */}
                      {/*   <p>{item.message}</p> */}
                      {/* </td> */}
                    </tr>
                  ),
                )}
            </tbody>
          </table>
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
