import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
import { useEffect, useState } from "react";
import "./table.css";
const Table = ({ dataSource, children, ...props }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const columns = children.columns;

  const [columnsSort, setColumnsSort] = useState(() => {
    const tamp = [];
    columns.forEach((item) => {
      tamp.push({ direction: "none", key: item.data, sort: item.sort });
    });
    return tamp;
  });

  useEffect(() => {
    setData(dataSource)
  }, [dataSource])

  const renderData = (data) => {
    return columns.map((item, index) => {
      if (item.render === undefined) {
        return <td key={index}>{data[item.data]}</td>;
      } else {
        return <td key={index}>{item.render(data[item.data], data)}</td>;
      }
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (search.length === 0) {
      setData(dataSource);
    } else {
      setData(
        dataSource.filter((item) => {
          var show = false;
          for (let i = 0; i < columns.length; i++) {
            let key = columns[i].data;
            let string = item[key].toString().toUpperCase();
            let stringChilren = search.toString().toUpperCase();
            if (string.includes(stringChilren)) {
              show = true;
            }
          }
          return show;
        })
      );
    }
  };

  const handleSort = (index) => {
    const direction = columnsSort[index].direction;
    const key = columnsSort[index].key;
    const sort = columnsSort[index].sort;
    var tamp = columnsSort;
    tamp[index].direction = direction === "ASC" ? "DSC" : "ASC";
    setColumnsSort(tamp);
    if (sort === true) {
      const dataSort = [...data];
      dataSort.sort((a, b) => {
        if (typeof a[key] === "string" || typeof b[key] === "string") {
          return direction === "ASC"
            ? a[key].localeCompare(b[key])
            : b[key].localeCompare(a[key]);
        }
        return direction === "ASC" ? a[key] - b[key] : b[key] - a[key];
      });
      setData(dataSort);
    }
  };

  const renderHeader = () => {
    return columns.map((item, index) => {
      return (
        <th key={index} onClick={() => handleSort(index)}>
          <div
            className={"d-flex align-items-center " + item.className}
          >
            {item.title}
            {
              columnsSort[index].sort && (
                columnsSort[index].direction === "none" ? <MobiledataOffIcon /> : (
                  columnsSort[index].direction === "ASC" ? (<ArrowDropUpIcon />) : (<ArrowDropDownIcon />)
                )
              )
            }
          </div>
        </th>
      );
    })
  }

  // const IconArrowDownUp = () => {
  //   return (
  //     <svg
  //       width="20px"
  //       height="20px"
  //       viewBox="-2 0 18 16"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
  //       />
  //     </svg>
  //   );
  // };

  // const IconArrowUp = () => {
  //   return (
  //     <svg
  //       width="20px"
  //       height="20px"
  //       viewBox="0 0 20 20"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M10 2.5L16.5 9H13v8H7V9H3.5L10 2.5z" />
  //     </svg>
  //   );
  // };

  // const IconArrowDown = () => {
  //   return (
  //     <svg
  //       width="20px"
  //       height="20px"
  //       viewBox="0 0 20 20"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M10 17.5L3.5 11H7V3h6v8h3.5L10 17.5z" />
  //     </svg>
  //   );
  // };

  return (
    <div>
      <div className="d-flex">
        <div className="ms-auto pb-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => handleSearch(e)}
            placeholder="Search..."
            className="form-control"
          ></input>
        </div>
      </div>
      <table className={"table" + (props.striped ? " table-striped" : "") + (props.hover ? " table-hover" : "") + (props.border ? " table-bordered" : "")}>
        <thead>
          <tr>
            {renderHeader()}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>{renderData(item)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
