import router from '@adonisjs/core/services/router';
import UsersController from "#controllers/users_controller";
router.on('/').render('pages/home');
router.get('/users', [UsersController, 'index']);
router.get('/user/:id', [UsersController, 'show']);
//# sourceMappingURL=routes.js.map