import { apiHandler, usersRepo, omit } from '@/Login/helpers/api/api-handler';
import { usersRepo } from '@/Login/helpers/api/users-repo';
import { omit } from '@/Login/helpers/api/omit';

export default apiHandler({
    get: getUsers
});

function getUsers(req, res) {
    // return users without hashed passwords in the response
    const response = usersRepo.getAll().map(x => omit(x, 'hash'));
    return res.status(200).json(response);
}
