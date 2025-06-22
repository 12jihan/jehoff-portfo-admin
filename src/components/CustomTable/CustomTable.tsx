import { useEffect, type ReactElement } from "react";
import { useContactData } from "../../customHooks/ContactData";
import type { IContactData } from "../../interfaces/ContactForm/IUseContactInfo";

function CustomTable(): ReactElement {
  const { isLoading, error, contacts, getAllContacts } = useContactData();
  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      {isLoading && <div>Loading contacts...</div>}
      {error && <div>Error: {error}</div>}
      <div className="blink-table-container">
        <div className="blink-table__header">
          <h3>Contacts</h3>
          <div className="btn__group">
            <button className="btn">Add Contact</button>
            <button className="btn">Export</button>
          </div>
        </div>
        <div className="blink-table__wrapper">
          <table className="blink-table">
            <thead className="blink-table__head">
              <tr>
                <th>X</th>
                <th className="sortable">Name</th>
                <th>Email</th>
                <th>Created</th>
                <th>Contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="blink-table__body">
              {contacts.map((item: IContactData, index: number): any => (
                <tr>
                  <td>X</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>Test</td>
                  <td>{item.canContact ? "yes" : "no"}</td>
                  <td>
                    <button>swift</button>
                    <button>swift</button>
                    <button>swift</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="blink-table__footer">
          <p>
            Showing <b>{contacts.length}</b> contacts
          </p>
        </div>
      </div>
    </>
  );
}

export default CustomTable;
