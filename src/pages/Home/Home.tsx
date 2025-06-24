import {
  Code2Icon,
  Contact2Icon,
  EyeIcon,
  NetworkIcon,
  PlusIcon,
} from "lucide-react";
import "./Home.scss";
import type { ReactElement } from "react";
import CustomTable from "../../components/CustomTable/CustomTable";

export default function Home(): ReactElement {
  return (
    <>
      <section className="container">
        <h2 className="section-header-center">Dashboard Overview</h2>
        <div className="section-body-center">
          <div className="card-group-h">
            <div className="data-card">
              <div className="card-header">
                <p>Portfo Views 06/23/25</p>
              </div>
              <div className="card-body">
                <EyeIcon />
                <p>6</p>
              </div>
            </div>
            <div className="data-card">
              <div className="card-header">
                <p>Github Repos</p>
              </div>
              <div className="card-body">
                <Code2Icon />
                <p className="lime">2</p>
              </div>
            </div>
            <div className="data-card">
              <div className="card-header">
                <p>Contact Forms</p>
              </div>
              <div className="card-body">
                <Contact2Icon />
                <p>5</p>
              </div>
            </div>
            <div className="data-card">
              <div className="card-header">
                <p>Site Uptime</p>
              </div>
              <div className="card-body">
                <NetworkIcon />
                <p>98.5%</p>
              </div>
            </div>
          </div>
          <div className="sub-container-h">
            <CustomTable />
            <div className="sub-container-v">
              {/* <div className="graph-card"> */}
              {/*   <div>Portfo Performance</div> */}
              {/*   <div>chart goes here</div> */}
              {/* </div> */}
              <div className="sub-container-v container-padding outline-light">
                <div className="sub-head">
                  <h3 className="sub-title">Quick Actions</h3>
                </div>
                <div className="sub-body">
                  <div className="card-group-v">
                    <button className="btn-long">
                      <div className="icon">
                        <PlusIcon />
                      </div>
                      <p>Add New Project</p>
                    </button>
                    <button className="btn-long">
                      <div className="icon">
                        <PlusIcon />
                      </div>
                      <p>Add New Project</p>
                    </button>
                    <button className="btn-long">
                      <div className="icon">
                        <EyeIcon />
                      </div>
                      <p>View Analytics</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
