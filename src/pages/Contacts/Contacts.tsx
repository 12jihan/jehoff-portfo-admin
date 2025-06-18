import { useEffect, type ReactElement } from "react";
import { NavLink } from "react-router";
import { useContactData } from "../../customHooks/ContactData";

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
            {contacts && contacts.map((item: any): ReactElement => <p>hi</p>)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
