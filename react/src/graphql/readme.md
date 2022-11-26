https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/

# CRUD API 사용하기
import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "./graphql/mutations";

const todo = { name: "My first todo", description: "Hello world!" };

/* create a todo */
await API.graphql(graphqlOperation(createTodo, { input: todo }));

/* update a todo */
await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" } }));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }));

# 필터
// Query with filters, limits, and pagination
let filter = {
    priority: {
        eq: 1 // filter priority = 1
    }
};
await API.graphql({ query: listProducts, variables: { filter: filter}}));

# 특정 이벤트 등록해서 수신받기
import { API, graphqlOperation } from "aws-amplify";
import { onCreateTodo } from "./graphql/subscriptions";

Subscribe to creation of Todo
const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
  next: (todoData) => {
    log(todoData);
    Do something with the data
  },
});

Stop receiving data updates from the subscription
subscription.unsubscribe();