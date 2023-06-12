import { useState, useEffect } from 'react';

import { Layout } from '@/Login/components/users/Layout';
import { AddEdit } from '@/Login/components/users/AddEdit';
import { Spinner } from '@/Login/components/Spinner';
import { userService } from '@/Login/services/user.service';
import { alertService } from '@/Login/services/alert.service';

export default Edit;

function Edit({ id }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // fetch user and set default form values if in edit mode
        userService.getById(id)
            .then(x => setUser(x))
            .catch(alertService.error)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <h1>Edit User</h1>
            {user ? <AddEdit {...user} /> : <Spinner /> }
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}
