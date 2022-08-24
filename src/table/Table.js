import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import PrevNext from "./components/PrevNext";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import getUsers from "./connections/getUsers";
import "./components/tableHeader.css";
import SearchInput from "./components/SearchInput";

const LIMIT = 4;
let SAERCH_LOADING = false;

export default function Table() {
  const [state, setState] = useState({
    loading: false,
    data: [],
    page: 1
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (state.loading) return;
    getUsers().then((data) => {
      setState((p) => ({
        ...p,
        loading: false,
        data
      }));
    });
  }, []);

  useEffect(() => {
    if (SAERCH_LOADING || search.trim() === "") return;
    setState({
      ...state,
      loading: true
    });
    SAERCH_LOADING = true;
    setTimeout(() => {
      setState({
        ...state,
        loading: false
      });
      SAERCH_LOADING = false;
    }, 500);
  }, [search]);

  return (
    <>
      <SearchInput
        value={search}
        onChange={(t) => {
          setSearch(t);
        }}
      />

      {state.loading ? (
        <Loading />
      ) : (
        <div style={{ minHeight: 141 }}>
          <TableHeader />
          <div className="row_container">
            {state.data
              .filter((u) => {
                if (search.trim() === "") return true;
                if (
                  u.lastName.toLowerCase().includes(search.toLowerCase()) ||
                  u.firstName.toLowerCase().includes(search.toLowerCase())
                )
                  return true;
                return false;
              })
              .filter(
                (_, index) =>
                  index < LIMIT * state.page &&
                  index >= LIMIT * (state.page - 1)
              )
              .map((user, index) => (
                <TableRow
                  key={index}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                />
              ))}
          </div>
        </div>
      )}
      <PrevNext
        page={state.page}
        max={state.data.length / LIMIT + 1}
        onNext={() => {
          setState({
            ...state,
            loading: true
          });
          setTimeout(() => {
            setState({
              ...state,
              page: state.page + 1,
              loading: false
            });
          }, 500);
        }}
        onPrev={() => {
          setState({
            ...state,
            loading: true
          });
          setTimeout(() => {
            setState({
              ...state,
              page: state.page - 1,
              loading: false
            });
          }, 500);
        }}
      />
      <div
        style={{
          textAlign: "center",
          fontSize: 14,
          fontFamily: "sans-serif",
          marginTop: 50
        }}
      >
        Page: {state.page}
      </div>
    </>
  );
}
