import { atom } from 'recoil';

const usersAtom = atom({
    key: 'usersAtom',
    default: []
});

const userAtom = atom({
    key: 'userAtom',
    default: {
        "displayName": "Edun Omatseye",
        "username": "edun_omatseye",
        "verified": true,
        "timestamp": 1646226676124,
        "gender": "Male",
        "followed": false,
        "following": false,
        "id": 1
      }
});

const filteredUsersAtom = atom({
    key: 'filteredUsersAtom',
    default: []
});

export { 
    usersAtom,
    userAtom,
    filteredUsersAtom
};