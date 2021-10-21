export default function List({users}) {
    return (<table>
        <thead>
        <tr>
            <th>id</th>
            <th>姓名</th>
        </tr>
        </thead>
        <tbody>
        {
            users.map(user => (<tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
            </tr>))
        }
        </tbody>

    </table>)
}