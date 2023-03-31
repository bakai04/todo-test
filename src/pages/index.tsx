import { Layout } from "@/modules/layout";
import { TaskList } from "@/modules/main/task-list";

function Home() {
  return (
    <Layout>
      <TaskList />
    </Layout>
  );
}

export default Home;
