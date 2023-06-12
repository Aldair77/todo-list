import { Layout} from '@/Login/components/users/Layout';
import { AddEdit } from '@/Login/components/users/AddEdit';

export default Add;

function Add() {
    return (
        <Layout>
            <h1>Add User</h1>
            <AddEdit />
        </Layout>
    );
}