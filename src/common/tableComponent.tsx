import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["First Name", "Last Name", "Status"];

// const TABLE_ROWS = [
//   {
//     firstName: "John Michael",
//     lastName: "Manager",
//     status: "23/04/18",
//   },
//   {
//     firstName: "John Michael",
//     lastName: "Manager",
//     status: "23/04/18",
//   },
// ];
interface tableProps {
  columns?: string[];
  rows: [];
  showAddCustomer?: () => void;
  showEditCustomer: (fName:string, lName: string, status: boolean) => void;
  deleteContact: (fName:string, lName: string, status: boolean) => void;
}

export const TableComponent = (props: tableProps) => {
  console.log("props =====", props);
  return (
    <Card className="overflow-scroll h-full w-full">
      {props && props.rows.length > 0 && (
        <>
        <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={props.showAddCustomer}
              >
                Create Customer
              </button>
            </div>
            <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props && props.rows &&
              props.rows.map(({ fName, lName, status }, index) => {
                const isLast = index === props.rows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={fName}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {lName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status ? 'Active' : 'Inactive  '}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Button
                        variant="gradient"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
                        onClick={() => props.showEditCustomer(fName,lName, status)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="gradient"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => props.deleteContact(fName,lName, status)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table> 
        </>
        
      )}
      {props.rows.length === 0 && (
        <>
          <Card>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={props.showAddCustomer}
              >
                Create Customer
              </button>
            </div>
            <div
              className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
              role="alert"
            >
              <p className="font-bold">Informational message</p>
              <p className="text-sm">
                No contact found. Please add contact from Create contact button.
              </p>
            </div>
          </Card>
        </>
      )}
    </Card>
  );
};
