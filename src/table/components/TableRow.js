import "./tableHeader.css";

export default function TableRow({ firstName, lastName, email }) {
  return (
    <div className="table_row">
      <div className="table_cell">{firstName}</div>
      <div className="table_cell">{lastName}</div>
      <div className="table_cell">{email}</div>
    </div>
  );
}
