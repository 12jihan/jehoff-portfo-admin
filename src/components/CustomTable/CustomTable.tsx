import { useEffect, type ReactElement } from "react";
import { useContactData } from "../../customHooks/ContactData";
import type { IContactData } from "../../interfaces/ContactForm/IUseContactInfo";
import {
  CircleDot,
  HeartPlusIcon,
  IceCreamConeIcon,
  MessageSquareDashedIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
} from "lucide-react";

function CustomTable(): ReactElement {
  const { isLoading, error, contacts, getAllContacts } = useContactData();
  useEffect(() => {
    getAllContacts();
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

  return (
    <>
      {isLoading && <div>Loading contacts...</div>}

      {error && <div>Error: {error}</div>}

      <div className="blink-table-container">
        <div className="blink-table__header">
          <h3>Contacts</h3>
          {/* <div className="btn__group"> */}
          {/*   <button className="btn">Add Contact</button> */}
          {/*   <button className="btn">Export</button> */}
          {/* </div> */}
        </div>
        <div className="blink-table__wrapper">
          <table className="blink-table">
            <thead className="blink-table__head">
              <tr>
                <th>Select</th>
                <th className="sortable">Name</th>
                <th>Email</th>
                <th>Created</th>
                <th>Contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="blink-table__body">
              {contacts.map((item: IContactData): any => (
                <tr className="blink-row" key={item.id}>
                  <td className="blink-cells checkbox-cell">
                    <button>
                      <CircleDot />
                    </button>
                  </td>
                  <td className="blink-cells">{item.name}</td>
                  <td className="blink-cells">{item.email}</td>
                  <td className="blink-cells">
                    {convertTimestamp(item.dateCreated)}
                  </td>
                  <td className="blink-cells">{item.contact ? "yes" : "no"}</td>
                  <td className="blink-cells cell-btns">
                    <button className="fav-btn">
                      <HeartPlusIcon />
                    </button>
                    <button className="read-btn">
                      <SearchIcon />
                    </button>
                    <button className="delete-btn">
                      <Trash2Icon />
                    </button>
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
