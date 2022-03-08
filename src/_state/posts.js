import { atom } from 'recoil';

const postsAtom = atom({
    key: 'postsAtom',
    default: []
});

const postAtom = atom({
    key: 'postAtom',
    default: {}
});

const filteredPostsAtom = atom({
    key: 'filteredPostsAtom',
    default: []
});

export { 
    postsAtom,
    postAtom,
    filteredPostsAtom
};