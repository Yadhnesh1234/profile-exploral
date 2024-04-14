import { DataGrid } from "@mui/x-data-grid";

export default function Table() {
  const columns = [
    { field: "_id", headerName: "User Id", width: 250 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    {
      field: "emailId",
      headerName: "Email",
      width: 300,
    },
  ];
  const rows=[
    {
      _id:1,
      firstName : "Yadhnesh",
      lastName : "Gangurde",
      emailId :"gangurdeyadhnesh28@gmail.com"
    }
  ]
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <h2 className="text-5xl text-black-500 ">Registered Users</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
          style={{ marginTop: "20px" }}
        />
      </div>
    </>
  );
}