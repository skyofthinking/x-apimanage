import { param2Obj } from 'utils';

const userMap = {
    admin: {
        role: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
        uid: '001'
    },
    editor: {
        role: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor',
        uid: '002'

    },
    developer: {
        role: ['develop'],
        token: 'develop',
        introduction: '我是开发',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '工程师小王',
        uid: '003'
    }
}

export default {
    login: config => {
        const { email } = JSON.parse(config.body);
        return {
            code: 20000,
            data: userMap[email.split('@')[0]]
        }
    },
    getInfo: config => {
        const { token } = param2Obj(config.url);
        if (userMap[token]) {
            return {
                code: 20000,
                data: userMap[token]
            }
        } else {
            return {
                code: Promise.reject('a')
            }
        }
    },
    logout: config => {
        return {
            code: 20000,
            message: 'success'
        }
    }
};
