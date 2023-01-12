import InputForm from "./input_form";
import TodoItems from "./todo_items";

function TodoList() {
  const initial = [ { text: "First todo item", date: "16/06", key: "1" },
                { text: "Second todo item", date: "09/10", key: "2" } ];

  return (
    <div className="todoListMain">
      <InputForm />
      <TodoItems />
    </div>
  );
}

export default TodoList;