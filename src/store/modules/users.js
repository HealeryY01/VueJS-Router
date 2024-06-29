const state = function () {
  return {
    userList: [
      {
        id: 1,
        name: "Nguyễn Thế Hiệu",
        age: 23,
        email: "hieuu@gmail.com",
        avatar:
          "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223",
        typePets: ["Chó", "Mèo"],
      },
      {
        id: 2,
        name: "Nguyễn Thị Hải Yến",
        age: 23,
        email: "haiyenn@gmail.com",
        avatar:
          "https://antimatter.vn/wp-content/uploads/2022/04/hinh-anh-avatar-nu.jpg",
        typePets: ["Chuột", "Cá"],
      },
    ],
    userDetail: null,
  };
};
const mutations = {
  setUserDetailMutation(state, paload) {
    const userDetail = state.userList.find((user) => user.id == paload);
    state.userDetail = userDetail;
  },
};
const actions = {
  getUserByIdAction(context, paload) {
    context.commit("setUserDetailMutation", paload);
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
