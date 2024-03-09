import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const Dashboard = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoCollection, setTodoCollection] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        value: todoValue,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const tempArr = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
      tempArr.push({
        id: doc.id,
        todo: doc.data(),
      });
    });

    setTodoCollection([...tempArr]);
  };

  console.log("todoCollection", todoCollection);
  const deletTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      setRefresh(!refresh);
      console.log("delete ");
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div>
      <input
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="Enter Todo"
      />
      <button onClick={addTodo}>ADD</button>
      {/* <button>Delete</button> */}

      {todoCollection?.map((obj, index) => {
        return (
          <p key={obj.id}>
            {" "}
            {index + 1} {obj.todo.value}{" "}
            <button onClick={() => deletTodo(obj.id)}>Del</button>
          </p>
        );
      })}
    </div>
  );
};

export default Dashboard;
