import { Card } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../actions/contactDetails";
import { SideBar } from "../common/sideBar";
import { TableComponent } from "../common/tableComponent";

const AddContact: React.FC = () => {
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const TABLE_HEAD = ["First Name", "Last Name", "Status"];
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [status, setStatus] = useState(false);
  const [contact, setContact] = useState()
  const dispatch = useDispatch(); 

  let AllContacts = useSelector(
    (state: any) => state?.contactReducer?.AllContacts
  );
  const showAddCustomer = () => {
    setAdd(true);
  };
  const showEditCustomer = async (fName: string, lName: string, status: boolean) => {
    setContact(AllContacts.filter((contact: any) => {
      return (contact.fName !== fName && contact.lName !== lName && contact.status !== status)
    }))
    await setAdd(false)
    await setFName(fName);
    await setLName(lName);
    await setStatus(status)
    await setEdit(true);
  };

  const deleteContact =  async (fName: string, lName: string, status: boolean) => {
    console.log("filer delete ===", fName, lName, status)
    let data = AllContacts.filter((contact: any) => {
      return (contact.fName !== fName && contact.lName !== lName)
    })
    console.log("============--------->", data)
    await updateContact(dispatch, data)
  }

  const inputTextChange = (event: any) => {
    if(event.target.name === 'fName') setFName(event.target.value);
    if(event.target.name === 'lName') setLName(event.target.value);
  }
  const inputRadioChange = (event: any) => {
    if(event.target.id === 'active') {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }

  const addContactInfo = () => {
    addContact(dispatch, {fName: fName, lName: lName, status: status})
    setAdd(false);
    setFName('');
    setLName('');
  }

  const editContactInfo = () => {
    let data = contact || [{}];
    data.push({fName: fName, lName: lName, status: status});
    console.log("all contqasdf ===", data)
    updateContact(dispatch, data)
    setAdd(false);
    setEdit(false)
    setFName('');
    setLName('');
  }
  
  return (
    <div className="addContact">
      <Card className="mt-6 w-96 float-left h-500">
        <SideBar />
      </Card>
      {!add && !edit && (
        <>
          <Card className="mt-6 float-left">
            <TableComponent
              columns={TABLE_HEAD}
              rows={AllContacts}
              showAddCustomer={showAddCustomer}
              showEditCustomer={showEditCustomer}
              deleteContact={deleteContact}
            />
          </Card>
        </>
      )}

      {add && (
        <>
          <Card className="mt-6 relative inset-x-100">
            <div>Create Contact Screen</div>
          </Card>
          <div className="mt-6">
              <label>First Name: </label>
              <input
                type="text"
                placeholder="First Name"
                onChange={inputTextChange}
                name="fName"
                className="relative bg-white bg-white rounded border-0 shadow outline"
              />
            </div>
            <div className="mb-3 pt-0 mt-10">
              <label>Last Name: </label>
              <input
                type="text"
                value={lName}
                onChange={inputTextChange}
                placeholder="Last Name"
                name="lName"
                className="relative bg-white bg-white rounded border-0 shadow outline"
              />
            </div>
            <div className="">
            <label>Status: </label>
            <input
              id="active"
              type="radio"
              value=""
              name="status"
              className="ml-5 mr-0"
              onClick={inputRadioChange}
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Active
            </label>
            <input
              checked
              id="inactive"
              type="radio"
              value=""
              onClick={inputRadioChange}
              name="status"
              className="ml-5 mr-0"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Inactive
            </label>
            </div>
            <button onClick={addContactInfo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Contact</button>

        </>
      )}

{edit && (
        <>
          <Card className="mt-6 relative inset-x-100">
            <div>Edit Contact Screen</div>
          </Card>
          <div className="mt-6">
              <label>First Name: </label>
              <input
                type="text"
                placeholder="First Name"
                value={fName}
                onChange={inputTextChange}
                name="fName"
                className="relative bg-white bg-white rounded border-0 shadow outline"
              />
            </div>
            <div className="mb-3 pt-0 mt-10">
              <label>Last Name: </label>
              <input
                type="text"
                value={lName}
                onChange={inputTextChange}
                placeholder="Last Name"
                name="lName"
                className="relative bg-white bg-white rounded border-0 shadow outline"
              />
            </div>
            <div className="">
            <label>Status: </label>
            <input
              id="active"
              checked={status === true}
              type="radio"
              value=""
              name="status"
              className="ml-5 mr-0"
              onClick={inputRadioChange}
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Active
            </label>
            <input
              checked={status === false}
              id="inactive"
              type="radio"
              value=""
              onClick={inputRadioChange}
              name="status"
              className="ml-5 mr-0"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Inactive
            </label>
            </div>
            <button onClick={editContactInfo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Editted Contact</button>

        </>
      )}
    </div>
  );
};
export default AddContact;
