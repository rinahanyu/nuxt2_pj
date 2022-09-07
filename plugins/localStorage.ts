import createPersistedState from "vuex-persistedstate";

export default ({ store }: any) => {
  createPersistedState({
    key: "vuex",
    paths: ["login"],
    storage: window.localStorage,
  })(store);
};
