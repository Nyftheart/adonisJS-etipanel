import User from "#models/user";
export default class UsersController {
    async index() {
        const users = await User.all();
        return users;
    }
    async show({ params }) {
        const user = await User.find(params.id);
        if (user) {
            return user;
        }
        return { message: 'User not found' };
    }
}
//# sourceMappingURL=users_controller.js.map