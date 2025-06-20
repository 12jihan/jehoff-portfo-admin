import type { ReactElement } from "react";

function CustomTable(): ReactElement {
  return (
    <>
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
                <th className="sortable">Test</th>
                <th className="sortable">Test</th>
                <th>Test</th>
                <th>Test</th>
              </tr>
            </thead>
            <tbody className="blink-table__body">
              <tr>
                <td>X</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="blink-table__footer">
          <p>
            Showing <b>16</b> users
          </p>
        </div>
      </div>
    </>
  );
}

export default CustomTable;
