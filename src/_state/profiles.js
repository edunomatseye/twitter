import { atom } from 'recoil';

const profilesAtom = atom({
    key: 'profilesAtom',
    default: []
});

const profileAtom = atom({
    key: 'profileAtom',
    default: {}
});

const filteredProfilesAtom = atom({
    key: 'filteredProfilesAtom',
    default: []
});

export { 
    profilesAtom,
    profileAtom,
    filteredProfilesAtom
};