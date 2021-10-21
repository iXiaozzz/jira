import SearchPanel from "./search-panel";
import List from "./list";

export default function ProjectListScreen() {
    const users = [
        {id: 1, name: 'iXiaozzz'},
        {id: 2, name: 'zhangsan'}
    ]
    return <div>
        <SearchPanel users={users}/>
        <List users={users}/>
    </div>
}