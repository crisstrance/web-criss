const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      userInfo: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessages: async () => {
        const opts = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
        try {
          // fetching data from the backend
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/getmessages",
            opts
          );
          if (resp.status !== 200) {
            throw new Error("Something went wrong");
          }
          const data = await resp.json();
          const result = [...data];
          if (result.length > 9) {
            for (let i = 0; i < result.length; i += 10) {
              const page = arr.slice(i, i + 10);
              result.push(page);
            }
          }
          setStore({ messages: result });
          localStorage.setItem("messages", JSON.stringify(data));
          return true;
        } catch (e) {
          console.log(`${e.name}: ${e.message}`);
        }
      },
      login: async (username, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            opts
          );
          if (resp.status !== 200) {
            new Error("Error signing up");
            return false;
          }
          const data = await resp.json();
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("username", data.user.username);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("full_name", data.user.full_name);
          localStorage.setItem("id", data.user.id);
          setStore({ token: data.access_token, userInfo: data.user });
          console.log(data.user);
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      getTokenFromStorage: () => {
        const token = localStorage.getItem("token");
        if (token && token !== "" && token !== undefined)
          setStore({ token: token });
        console.log("getting token from local storage");
      },
      logout: () => {
        localStorage.clear();
        setStore({ token: null });
        console.log("logging out");
      },
    },
  };
};

export default getState;
