import { render } from "@testing-library/react";
import { Table, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { deletePhoneNumber, setPhoneNumber } from "../../Redux/auth_reducer.js";
import { AddNumber } from "./AddNumber.js";
import styles from "./PhoneBook.module.css";
import Modal from "antd/lib/modal/Modal";

export function PhoneBook() {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const data = useSelector((state) => state.auth.data);
  const [isAddNumberActive, setIsAddNumberActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNumber, setEditingNumber] = useState(null);
  const dispatch = useDispatch();

  const onDeleteNumber = (e) => {
    dispatch(deletePhoneNumber(e.key));
  };

  const onEditNumber = (record) => {
    setIsEditing(true);
    setEditingNumber({ ...record });
  };

  const columns = [
    {
      key: "1",
      title: "First Name",
      dataIndex: "firstName",

      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
                confirm();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.firstName.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: "2",
      title: "Last Name",
      dataIndex: "lastName",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
                confirm();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.lastName.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: "3",
      title: "Age",
      dataIndex: "age",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <a
              onClick={() => {
                onEditNumber(record);
              }}
              className={styles.editButton}
            >
              Edit
            </a>
            <a
              onClick={() => {
                onDeleteNumber(record);
              }}
            >
              Delete
            </a>
          </>
        );
      },
    },
  ];

  if (isAuth) {
    return (
      <>
        <AddNumber
          active={isAddNumberActive}
          setActive={setIsAddNumberActive}
        />
        <Button
          type="primary"
          className={styles.addNumberButton}
          onClick={() => setIsAddNumberActive(true)}
        >
          Add Number
        </Button>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
        />
        <Modal
          title="Edit Phone Number"
          visible={isEditing}
          okText="Save Changes"
          onCancel={() => {
            setIsEditing(false);
            setEditingNumber(null);
          }}
          onOk={() => {
            dispatch(setPhoneNumber(editingNumber))
            setIsEditing(false);
            setEditingNumber(null);
            }

          }
        >
          <Input
            value={editingNumber?.firstName}
            className={styles.editInput}
            onChange={(e) => {
              setEditingNumber((pre) => {
                return { ...pre, firstName: e.target.value };
              });
            }}
          />
          <Input
            value={editingNumber?.lastName}
            className={styles.editInput}
            onChange={(e) => {
              setEditingNumber((pre) => {
                return { ...pre, lastName: e.target.value };
              });
            }}
          />
          <Input
            value={editingNumber?.age}
            className={styles.editInput}
            onChange={(e) => {
              setEditingNumber((pre) => {
                return { ...pre, age: e.target.value };
              });
            }}
          />
          <Input
            value={editingNumber?.address}
            className={styles.editInput}
            onChange={(e) => {
              setEditingNumber((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
          <Input
            value={editingNumber?.phone}
            className={styles.editInput}
            onChange={(e) => {
              setEditingNumber((pre) => {
                return { ...pre, phone: e.target.value };
              });
            }}
          />
        </Modal>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
