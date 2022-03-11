import { Link, useRouteMatch } from "react-router-dom";

const Menu = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <div className="accordion" id="menu">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#material"
              aria-controls="material"
            >
              Vật chất
            </button>
          </h2>
          <div
            id="material"
            className="accordion-collapse collapse"
            aria-labelledby="material"
            data-bs-parent="#menu"
          >
            <div className="accordion-body">
              <div>
                <Link to={`${path}/QLCSVC/List-menu-type`}>
                  Danh sách vật chất
                </Link>
              </div>
              <div>
                <Link to={`${path}/QLCSVC/Add-menu-type`}>
                  Thêm vật chất
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#material-type"
              aria-controls="collapseOne"
            >
              Vật chất
            </button>
          </h2>
          <div
            id="material-type"
            className="accordion-collapse collapse"
            data-bs-parent="#menu"
          >
            <div className="accordion-body">
              <div>
                <Link to={`${path}/QLCSVC/List-menu-type`}>
                  Danh sách vật chất
                </Link>
              </div>
              <div>
                <Link to={`${path}/QLCSVC/Add-menu-type`}>
                  Thêm vật chất
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
